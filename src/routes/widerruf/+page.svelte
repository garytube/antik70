<script lang="ts">
	import { SITE } from '$const';
	import { env } from '$env/dynamic/public';
	import { onMount, tick } from 'svelte';
	import { browser } from '$app/environment';

	const W = SITE.DE.WIDERRUF;

	type Step = 'form' | 'review' | 'success' | 'fallback';
	let step: Step = 'form';

	let submitting = false;
	let confirmedAt = '';
	let errors: Record<string, string> = {};

	// Cloudflare Turnstile (Bot-Schutz). Sitekey wird erst im Browser gelesen,
	// damit das Prerendern nicht fehlschlägt. Ist kein Sitekey gesetzt, läuft
	// der Bot-Schutz nicht – der Worker lehnt dann fail-closed ab.
	let turnstileSitekey = '';
	let turnstileToken = '';
	let turnstileEl: HTMLDivElement | undefined;
	let turnstileWidgetId: string | undefined;

	onMount(() => {
		turnstileSitekey = env.PUBLIC_TURNSTILE_SITEKEY ?? '';
		if (turnstileSitekey) {
			const s = document.createElement('script');
			s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
			s.async = true;
			s.defer = true;
			document.head.appendChild(s);
		}
	});

	function renderTurnstile() {
		if (!browser || !turnstileSitekey || !turnstileEl) return;
		// @ts-expect-error – Turnstile injiziert window.turnstile
		const ts = window.turnstile;
		if (!ts) {
			setTimeout(renderTurnstile, 200);
			return;
		}
		if (turnstileWidgetId !== undefined) return;
		turnstileWidgetId = ts.render(turnstileEl, {
			sitekey: turnstileSitekey,
			callback: (token: string) => (turnstileToken = token),
			'error-callback': () => (turnstileToken = ''),
			'expired-callback': () => (turnstileToken = '')
		});
	}

	function resetTurnstile() {
		// @ts-expect-error – Turnstile injiziert window.turnstile
		const ts = browser ? window.turnstile : undefined;
		if (ts && turnstileWidgetId !== undefined) ts.remove(turnstileWidgetId);
		turnstileWidgetId = undefined;
		turnstileToken = '';
	}

	// Beim Eintritt in den Bestätigungsschritt das Widget rendern.
	$: if (step === 'review' && turnstileSitekey && turnstileWidgetId === undefined) {
		tick().then(renderTurnstile);
	}

	let form = {
		name: '',
		email: '',
		orderNumber: '',
		orderDate: '',
		address: '',
		phone: '',
		items: '',
		message: ''
	};

	function validate(): boolean {
		errors = {};
		if (!form.name.trim()) errors.name = 'Bitte geben Sie Ihren Namen an.';
		if (!form.email.trim()) errors.email = 'Bitte geben Sie Ihre E-Mail-Adresse an.';
		else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse an.';
		if (!form.orderNumber.trim()) errors.orderNumber = 'Bitte geben Sie Ihre Bestell- oder Auftragsnummer an.';
		return Object.keys(errors).length === 0;
	}

	function goToReview() {
		if (validate()) {
			step = 'review';
			scrollTo({ top: 0, behavior: 'smooth' });
		}
	}

	function backToForm() {
		resetTurnstile();
		step = 'form';
	}

	function buildMailtoBody(): string {
		const lines = [
			'Hiermit widerrufe ich den von mir abgeschlossenen Vertrag.',
			'',
			`Name: ${form.name}`,
			`E-Mail: ${form.email}`,
			`Bestell-/Auftragsnummer: ${form.orderNumber}`,
			form.orderDate ? `Bestelldatum: ${form.orderDate}` : '',
			form.address ? `Anschrift: ${form.address}` : '',
			form.phone ? `Telefon: ${form.phone}` : '',
			form.items ? `Widerrufene Ware/Dienstleistung: ${form.items}` : '',
			form.message ? `Bemerkung: ${form.message}` : '',
			'',
			`Datum des Widerrufs: ${new Date().toLocaleString('de-DE')}`
		];
		return lines.filter((l) => l !== '').join('\n');
	}

	$: mailtoHref =
		`mailto:${SITE.EMAIL_HREF}` + `?subject=${encodeURIComponent(W.EMAIL_SUBJECT + ' – Bestellung ' + form.orderNumber)}` + `&body=${encodeURIComponent(buildMailtoBody())}`;

	async function confirm() {
		// Cloudflare-Endpoint (Worker / Pages Function), der die E-Mails versendet.
		// Wird über die Umgebungsvariable PUBLIC_WIDERRUF_ENDPOINT gesetzt.
		// Erst hier (im Browser) gelesen, damit das Prerendern nicht fehlschlägt.
		// Solange nicht gesetzt, greift der mailto-Fallback.
		const endpoint = env.PUBLIC_WIDERRUF_ENDPOINT ?? '';

		if (!endpoint) {
			// Cloudflare-Versand noch nicht eingerichtet -> mailto-Fallback.
			step = 'fallback';
			scrollTo({ top: 0, behavior: 'smooth' });
			return;
		}

		// Bot-Schutz: ohne gelösten Turnstile keinen Versand auslösen.
		if (turnstileSitekey && !turnstileToken) {
			errors = { turnstile: 'Bitte bestätigen Sie, dass Sie kein Roboter sind.' };
			return;
		}

		submitting = true;
		const submittedAt = new Date().toISOString();

		try {
			const res = await fetch(endpoint, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ ...form, submittedAt, turnstileToken })
			});
			if (!res.ok) throw new Error(`HTTP ${res.status}`);
			confirmedAt = new Date().toLocaleString('de-DE');
			step = 'success';
		} catch (e) {
			// Versand fehlgeschlagen -> mailto-Fallback, damit der Widerruf nie verloren geht.
			resetTurnstile();
			step = 'fallback';
		} finally {
			submitting = false;
			scrollTo({ top: 0, behavior: 'smooth' });
		}
	}
</script>

<svelte:head>
	<title>Antik70 – Vertrag widerrufen</title>
	<meta name="description" content="Widerrufen Sie hier bequem online einen mit Antik70 geschlossenen Vertrag. Eingangsbestätigung per E-Mail." />
	<meta name="robots" content="noindex" />
</svelte:head>

<main class="container max-w-3xl py-8 md:py-14">
	<a href="/" class="text-sm text-primary/70 hover:text-highlight">&larr; Zurück zur Startseite</a>

	<h1 class="font-serif text-3xl md:text-5xl text-primary mt-4 mb-2">{W.TITLE}</h1>

	{#if step === 'form'}
		<p class="prose text-primary/90 mb-8 max-w-none">{W.INTRO}</p>

		<form on:submit|preventDefault={goToReview} class="grid gap-5" novalidate>
			<div class="grid gap-1">
				<label for="name" class="font-bold text-primary">Vor- und Nachname <span class="text-redish">*</span></label>
				<input
					id="name"
					type="text"
					autocomplete="name"
					bind:value={form.name}
					class="rounded-text border-2 border-primary/30 bg-white px-3 py-2 focus:border-primary outline-none"
					class:border-redish={errors.name}
				/>
				{#if errors.name}<span class="text-sm text-redish">{errors.name}</span>{/if}
			</div>

			<div class="grid gap-1">
				<label for="email" class="font-bold text-primary">E-Mail-Adresse <span class="text-redish">*</span></label>
				<input
					id="email"
					type="email"
					autocomplete="email"
					bind:value={form.email}
					class="rounded-text border-2 border-primary/30 bg-white px-3 py-2 focus:border-primary outline-none"
					class:border-redish={errors.email}
				/>
				{#if errors.email}<span class="text-sm text-redish">{errors.email}</span>{/if}
			</div>

			<div class="grid gap-1">
				<label for="orderNumber" class="font-bold text-primary">Bestell- / Auftragsnummer <span class="text-redish">*</span></label>
				<input
					id="orderNumber"
					type="text"
					bind:value={form.orderNumber}
					class="rounded-text border-2 border-primary/30 bg-white px-3 py-2 focus:border-primary outline-none"
					class:border-redish={errors.orderNumber}
				/>
				{#if errors.orderNumber}<span class="text-sm text-redish">{errors.orderNumber}</span>{/if}
			</div>

			<div class="grid md:grid-cols-2 gap-5">
				<div class="grid gap-1">
					<label for="orderDate" class="font-bold text-primary">Bestelldatum</label>
					<input id="orderDate" type="date" bind:value={form.orderDate} class="rounded-text border-2 border-primary/30 bg-white px-3 py-2 focus:border-primary outline-none" />
				</div>
				<div class="grid gap-1">
					<label for="phone" class="font-bold text-primary">Telefon (optional)</label>
					<input
						id="phone"
						type="tel"
						autocomplete="tel"
						bind:value={form.phone}
						class="rounded-text border-2 border-primary/30 bg-white px-3 py-2 focus:border-primary outline-none"
					/>
				</div>
			</div>

			<div class="grid gap-1">
				<label for="address" class="font-bold text-primary">Anschrift (optional)</label>
				<input
					id="address"
					type="text"
					autocomplete="street-address"
					bind:value={form.address}
					class="rounded-text border-2 border-primary/30 bg-white px-3 py-2 focus:border-primary outline-none"
				/>
			</div>

			<div class="grid gap-1">
				<label for="items" class="font-bold text-primary">Widerrufene Ware / Dienstleistung (optional)</label>
				<textarea id="items" rows="2" bind:value={form.items} class="rounded-text border-2 border-primary/30 bg-white px-3 py-2 focus:border-primary outline-none"></textarea>
			</div>

			<div class="grid gap-1">
				<label for="message" class="font-bold text-primary">Bemerkung (optional)</label>
				<textarea id="message" rows="3" bind:value={form.message} class="rounded-text border-2 border-primary/30 bg-white px-3 py-2 focus:border-primary outline-none"></textarea>
			</div>

			<button type="submit" class="mt-2 max-w-max text-lg shadow-lg text-white px-6 py-2.5 btn rounded-xl bg-gradient-to-tr from-primary from-60% to-[#664e43] hover:from-10%">
				Weiter zur Bestätigung
			</button>
		</form>
	{:else if step === 'review'}
		<h2 class="font-serif text-2xl text-primary mt-4 mb-2">{W.REVIEW_TITLE}</h2>
		<p class="text-primary/80 mb-6">{W.REVIEW_HINT}</p>

		<dl class="rounded-text border-2 border-primary/20 bg-white/60 divide-y divide-primary/10">
			{#each [['Name', form.name], ['E-Mail', form.email], ['Bestell- / Auftragsnummer', form.orderNumber], ['Bestelldatum', form.orderDate], ['Telefon', form.phone], ['Anschrift', form.address], ['Widerrufene Ware / Dienstleistung', form.items], ['Bemerkung', form.message]] as [label, value]}
				{#if value}
					<div class="grid grid-cols-1 md:grid-cols-3 gap-1 px-4 py-3">
						<dt class="font-bold text-primary/70">{label}</dt>
						<dd class="md:col-span-2 text-primary whitespace-pre-line">{value}</dd>
					</div>
				{/if}
			{/each}
		</dl>

		{#if turnstileSitekey}
			<div class="mt-6" bind:this={turnstileEl}></div>
			{#if errors.turnstile}<p class="text-sm text-redish mt-2">{errors.turnstile}</p>{/if}
		{/if}

		<div class="flex flex-wrap gap-3 mt-6">
			<button type="button" on:click={backToForm} class="text-base px-5 py-2.5 rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors">
				Zurück / ändern
			</button>
			<button
				type="button"
				disabled={submitting}
				on:click={confirm}
				class="text-lg shadow-lg text-white px-6 py-2.5 btn rounded-xl bg-gradient-to-tr from-redish from-60% to-redish-LIGHT hover:from-10% disabled:opacity-60"
			>
				{submitting ? 'Wird gesendet …' : W.CONFIRM_BUTTON}
			</button>
		</div>
	{:else if step === 'success'}
		<div class="rounded-text border-2 border-primary/20 bg-white/70 p-6 mt-4">
			<h2 class="font-serif text-2xl text-primary mb-2">{W.SUCCESS_TITLE}</h2>
			<p class="text-primary/90">{W.SUCCESS_TEXT}</p>
			{#if confirmedAt}
				<p class="text-sm text-primary/70 mt-4">Eingang am: {confirmedAt}</p>
			{/if}
			<a href="/" class="inline-block mt-6 text-base px-5 py-2.5 rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors">
				Zurück zur Startseite
			</a>
		</div>
	{:else if step === 'fallback'}
		<div class="rounded-text border-2 border-highlight bg-white/70 p-6 mt-4">
			<h2 class="font-serif text-2xl text-primary mb-2">{W.FALLBACK_TITLE}</h2>
			<p class="text-primary/90 mb-5">{W.FALLBACK_TEXT}</p>
			<a href={mailtoHref} class="inline-block text-lg shadow-lg text-white px-6 py-2.5 btn rounded-xl bg-gradient-to-tr from-primary from-60% to-[#664e43] hover:from-10%">
				Widerruf per E-Mail senden
			</a>
			<div class="mt-6">
				<button type="button" on:click={() => (step = 'review')} class="text-base text-primary/70 hover:text-highlight underline"> Zurück zur Übersicht </button>
			</div>
		</div>
	{/if}
</main>
