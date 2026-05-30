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
 *   - RESEND_API_KEY   (Secret)  API-Key des E-Mail-Dienstes
 *   - FROM_EMAIL       (Var)     Absender, z. B. "Antik70 <widerruf@antik70.de>"
 *   - OWNER_EMAIL      (Var)     Postfach des Betreibers, z. B. "info@antik70.de"
 *   - ALLOWED_ORIGIN   (Var)     erlaubte Herkunft, z. B. "https://antik70.de"
 */

export default {
	async fetch(request, env) {
		const cors = {
			'Access-Control-Allow-Origin': env.ALLOWED_ORIGIN || '*',
			'Access-Control-Allow-Methods': 'POST, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type'
		};

		if (request.method === 'OPTIONS') {
			return new Response(null, { headers: cors });
		}
		if (request.method !== 'POST') {
			return json({ error: 'Method not allowed' }, 405, cors);
		}

		let data;
		try {
			data = await request.json();
		} catch {
			return json({ error: 'Invalid JSON' }, 400, cors);
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
