/**
 * Cloudflare Worker für den Widerrufsbutton von antik70.de
 *
 * Nimmt das Widerruf-Formular (POST JSON) entgegen und versendet zwei E-Mails:
 *   1. Benachrichtigung an den Shop-Betreiber (Widerruf eingegangen)
 *   2. Eingangsbestätigung an den Kunden (gesetzlich vorgeschrieben, mit Datum/Uhrzeit)
 *
 * E-Mail-Versand erfolgt hier über die Resend-API (https://resend.com) – einfach
 * per HTTP. Als Alternative kann die Cloudflare Email Routing "send_email"-Bindung
 * genutzt werden (nur für verifizierte Empfänger, eignet sich für die
 * Betreiber-Benachrichtigung). Siehe README.
 *
 * Benötigte Secrets / Variablen (via `wrangler secret put` bzw. wrangler.toml):
 *   - RESEND_API_KEY    (Secret)  API-Key des E-Mail-Dienstes
 *   - TURNSTILE_SECRET  (Secret)  Cloudflare-Turnstile-Secret (Bot-Schutz, PFLICHT)
 *   - FROM_EMAIL        (Var)     Absender, z. B. "Antik70 <widerruf@antik70.de>"
 *   - OWNER_EMAIL       (Var)     Postfach des Betreibers, z. B. "info@antik70.de"
 *   - ALLOWED_ORIGIN    (Var)     erlaubte Herkunft, z. B. "https://antik70.de"
 *   - RATE_LIMITER      (Binding) optional: Workers-Rate-Limiting (siehe wrangler.toml)
 *
 * Missbrauchsschutz (sonst offenes Mail-Relay!):
 *   1. Origin-Prüfung gegen ALLOWED_ORIGIN
 *   2. optionales Rate-Limit pro IP
 *   3. Cloudflare Turnstile (fail-closed: ohne gültiges Token kein Versand)
 */

export default {
	async fetch(request, env) {
		const cors = {
			'Access-Control-Allow-Origin': env.ALLOWED_ORIGIN || '*',
			'Access-Control-Allow-Methods': 'POST, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type',
			Vary: 'Origin'
		};

		if (request.method === 'OPTIONS') {
			return new Response(null, { headers: cors });
		}
		if (request.method !== 'POST') {
			return json({ error: 'Method not allowed' }, 405, cors);
		}

		// 1) Origin-Prüfung. Browser senden Origin bei Cross-Origin-POSTs; stimmt
		// dieser nicht, sofort ablehnen. (Schützt nicht gegen Clients ohne Origin
		// – dafür greift der Turnstile-Check unten.)
		const origin = request.headers.get('Origin');
		if (env.ALLOWED_ORIGIN && origin && origin !== env.ALLOWED_ORIGIN) {
			return json({ error: 'Forbidden origin' }, 403, cors);
		}

		const clientIp = request.headers.get('CF-Connecting-IP') || 'unknown';

		// 2) Rate-Limit pro IP (optional, nur wenn Binding konfiguriert).
		if (env.RATE_LIMITER) {
			const { success } = await env.RATE_LIMITER.limit({ key: clientIp });
			if (!success) {
				return json({ error: 'Zu viele Anfragen. Bitte später erneut versuchen.' }, 429, cors);
			}
		}

		let data;
		try {
			data = await request.json();
		} catch {
			return json({ error: 'Invalid JSON' }, 400, cors);
		}

		// 3) Turnstile-Verifikation – fail-closed: ohne Secret kein Versand.
		if (!env.TURNSTILE_SECRET) {
			return json({ error: 'Server misconfigured: TURNSTILE_SECRET fehlt' }, 500, cors);
		}
		const human = await verifyTurnstile(env.TURNSTILE_SECRET, data.turnstileToken, clientIp);
		if (!human) {
			return json({ error: 'Bot-Schutz fehlgeschlagen' }, 403, cors);
		}

		const { name, email, orderNumber } = data;
		if (!name || !email || !orderNumber) {
			return json({ error: 'Pflichtfelder fehlen' }, 422, cors);
		}

		const receivedAt = new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' });
		const summary = formatSummary(data, receivedAt);

		try {
			// 1) Benachrichtigung an den Betreiber
			await sendEmail(env, {
				to: env.OWNER_EMAIL,
				replyTo: email,
				subject: `Neuer Widerruf – Bestellung ${orderNumber}`,
				text: `Es ist ein Widerruf eingegangen.\n\n${summary}`
			});

			// 2) Eingangsbestätigung an den Kunden
			await sendEmail(env, {
				to: email,
				subject: 'Eingangsbestätigung Ihres Widerrufs – Antik70',
				text:
					`Guten Tag ${name},\n\n` +
					`wir bestätigen den Eingang Ihres Widerrufs am ${receivedAt}.\n\n` +
					`Ihre Angaben:\n${summary}\n\n` +
					`Bitte bewahren Sie diese Bestätigung auf.\n\nMit freundlichen Grüßen\nIhr Antik70-Team`
			});
		} catch (err) {
			return json({ error: 'E-Mail-Versand fehlgeschlagen', detail: String(err) }, 502, cors);
		}

		return json({ ok: true, receivedAt }, 200, cors);
	}
};

async function verifyTurnstile(secret, token, ip) {
	if (!token) return false;
	const body = new FormData();
	body.append('secret', secret);
	body.append('response', token);
	if (ip && ip !== 'unknown') body.append('remoteip', ip);
	const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
		method: 'POST',
		body
	});
	if (!res.ok) return false;
	const data = await res.json();
	return data.success === true;
}

function formatSummary(d, receivedAt) {
	const rows = [
		['Name', d.name],
		['E-Mail', d.email],
		['Bestell-/Auftragsnummer', d.orderNumber],
		['Bestelldatum', d.orderDate],
		['Telefon', d.phone],
		['Anschrift', d.address],
		['Widerrufene Ware/Dienstleistung', d.items],
		['Bemerkung', d.message],
		['Eingang am', receivedAt]
	];
	return rows
		.filter(([, v]) => v)
		.map(([k, v]) => `${k}: ${v}`)
		.join('\n');
}

async function sendEmail(env, { to, subject, text, replyTo }) {
	const res = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${env.RESEND_API_KEY}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			from: env.FROM_EMAIL,
			to: [to],
			subject,
			text,
			...(replyTo ? { reply_to: replyTo } : {})
		})
	});
	if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}

function json(body, status, headers) {
	return new Response(JSON.stringify(body), {
		status,
		headers: { 'Content-Type': 'application/json', ...headers }
	});
}
