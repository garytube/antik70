<script lang="ts">
	import { SITE } from '$const';
	import Store from '$assets/store.webp';
	import antik2 from '$assets/antik_moebel/antik_moebel_2.jpg';

	interface Props {
		id?: string;
	}

	let { id = '' }: Props = $props();
</script>

<!-- About section -->
<section {id} class="bg-beige py-20 xl:py-28">
	<div class="container mx-auto">
		<div class="grid md:grid-cols-2 gap-12 xl:gap-20 items-start">
			<!-- Text -->
			<div>
				<p class="font-sans text-xs font-bold tracking-widest2 uppercase text-amber mb-4">
					Unsere Geschichte
				</p>
				<h2 class="font-serif text-4xl xl:text-5xl text-primary leading-tight text-balance mb-6">
					{SITE.DE.ABOUT_HEADLINE}
				</h2>
				<p class="font-sans text-base text-stone leading-relaxed mb-5 text-pretty">
					{SITE.DE.ABOUT_TEXT}
				</p>
				<p class="font-sans text-base text-stone leading-relaxed text-pretty">
					{SITE.DE.ABOUT_TEXT_2}
				</p>

				<!-- Map & Address -->
				<div class="mt-10 rounded-2xl overflow-hidden border border-beige-dark shadow-sm">
					<iframe
						class="w-full h-52"
						title="Antik70 Standort"
						src="https://www.openstreetmap.org/export/embed.html?bbox=13.400115072727205%2C52.489708834295506%2C13.4024915099144%2C52.49123259056697&amp;layer=mapnik&amp;marker=52.490470719030405%2C13.4013032913208"
					></iframe>
					<div class="bg-beige-light px-6 py-5 flex flex-col sm:flex-row gap-6 sm:items-start sm:justify-between">
						<address class="not-italic">
							<p class="font-sans font-bold text-xs uppercase tracking-widest text-stone mb-1">Adresse</p>
							<p class="font-sans text-primary text-sm leading-relaxed">
								Antik 70<br />
								Gneisenaustr. 70<br />
								10961 Berlin-Kreuzberg
							</p>
						</address>
						<div>
							<p class="font-sans font-bold text-xs uppercase tracking-widest text-stone mb-1">Anfahrt</p>
							<ul class="font-sans text-sm text-primary leading-relaxed space-y-0.5">
								<li><strong>U-Bahn</strong> U7 Südstern / Gneisenaustr.</li>
								<li><strong>Bus</strong> 140 Gneisenaustr./Baerwaldstr.</li>
							</ul>
						</div>
						<a
							href="https://www.google.com/maps?q=Gneisenaustr.+70,+10961+Berlin"
							target="_blank"
							rel="noopener noreferrer"
							class="self-start sm:self-center inline-flex items-center gap-1.5 bg-primary text-beige-light font-sans font-semibold text-xs tracking-wide px-4 py-2.5 rounded-full hover:bg-amber-dark transition-colors duration-200 shrink-0"
						>
							Google Maps
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5">
								<path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd" />
								<path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd" />
							</svg>
						</a>
					</div>
				</div>
			</div>

			<!-- Images & Opening times -->
			<div class="flex flex-col gap-6">
				<img src={Store} alt="Antik70 Atelier Gneisenaustraße 70" class="rounded-2xl w-full h-64 object-cover shadow-md" />
				<img src={antik2} alt="Restauriertes Möbelstück bei Antik70" class="rounded-2xl w-full h-48 object-cover shadow-md hidden md:block" />

				<!-- Opening hours card -->
				<div class="bg-beige-light rounded-2xl p-6 border border-beige-dark">
					<p class="font-sans font-bold text-xs uppercase tracking-widest text-stone mb-4">
						{SITE.DE.OPEN_HOURS}
					</p>
					<div class="space-y-3">
						<div class="flex justify-between items-center">
							<span class="font-sans text-sm text-primary font-semibold">{SITE.DE.OPEN_HOURS_1}</span>
							<span class="font-sans text-sm text-stone">{SITE.DE.OPEN_HOURS_2}</span>
						</div>
						<hr class="divider" />
						<div class="flex justify-between items-center">
							<span class="font-sans text-sm text-primary font-semibold">{SITE.DE.OPEN_HOURS_3}</span>
							<span class="font-sans text-sm text-stone">{SITE.DE.OPEN_HOURS_4}</span>
						</div>
					</div>
					<p class="font-sans text-xs text-stone mt-4 italic">Besuche bitte vorab per Telefon oder E-Mail ankündigen.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Contact section -->
<section id="kontakt" class="bg-primary py-20 xl:py-28">
	<div class="container mx-auto">
		<div class="max-w-2xl mx-auto text-center">
			<p class="font-sans text-xs font-bold tracking-widest2 uppercase text-amber mb-4">
				Kontakt
			</p>
			<h2 class="font-serif text-4xl xl:text-5xl text-beige-light leading-tight text-balance mb-5">
				Lassen Sie uns reden.
			</h2>
			<p class="font-sans text-beige-dark text-base leading-relaxed mb-12 text-pretty">
				Kein Webshop, keine automatisierten E-Mails. Schreiben oder rufen Sie uns an — wir antworten persönlich, schnell und ohne Hokuspokus.
			</p>

			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a
					href="tel:{SITE.TELEPHONE.LANDLINE_HREF}"
					class="inline-flex items-center justify-center gap-3 bg-amber text-primary font-sans font-bold text-base px-8 py-4 rounded-full hover:bg-amber-light transition-colors duration-200"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
						<path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
					</svg>
					{SITE.TELEPHONE.LANDLINE}
				</a>
				<a
					href="mailto:{SITE.EMAIL_HREF}"
					class="inline-flex items-center justify-center gap-3 border-2 border-amber text-amber font-sans font-semibold text-base px-8 py-4 rounded-full hover:bg-amber hover:text-primary transition-colors duration-200"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
						<path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
						<path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
					</svg>
					{SITE.EMAIL}
				</a>
			</div>
		</div>
	</div>
</section>
