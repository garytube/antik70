<script lang="ts">
	import { SITE } from '$const';
</script>

<footer class="bg-primary-dark border-t border-primary text-beige-dark">
	<div class="container mx-auto py-14">
		<div class="grid grid-cols-2 md:grid-cols-4 gap-10">
			<!-- Brand column -->
			<div class="col-span-2 md:col-span-1">
				<a href="/" class="inline-block mb-4" title="Antik70 – zurück zur Startseite">
					<span class="font-serif text-2xl text-beige-light tracking-tight">Antik<span class="text-amber">70</span></span>
				</a>
				<p class="font-sans text-xs leading-relaxed text-stone max-w-[200px] text-pretty">
					Wir finden, restaurieren und verkaufen zeitlose Möbel & Lampen aus Berlin-Kreuzberg.
				</p>
				<div class="mt-5 space-y-1.5">
					<a href="tel:{SITE.TELEPHONE.LANDLINE_HREF}" class="flex items-center gap-2 font-sans text-xs text-stone hover:text-amber transition-colors">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5 shrink-0">
							<path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd" />
						</svg>
						{SITE.TELEPHONE.LANDLINE}
					</a>
					<a href="mailto:{SITE.EMAIL_HREF}" class="flex items-center gap-2 font-sans text-xs text-stone hover:text-amber transition-colors">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5 shrink-0">
							<path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
							<path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
						</svg>
						{SITE.EMAIL}
					</a>
				</div>
			</div>

			<!-- Link columns -->
			{#each Object.entries(SITE.DE.FOOTER_LINKS) as [category, links]}
				<div>
					<h4 class="font-sans font-bold text-xs uppercase tracking-widest text-beige-light mb-4">{category}</h4>
					<ul class="space-y-2.5">
						{#each links as link}
							<li>
								<a
									href={link.href}
									class="font-sans text-xs text-stone hover:text-amber transition-colors duration-200"
								>
									{link.name}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}

			<!-- Hours column -->
			<div>
				<h4 class="font-sans font-bold text-xs uppercase tracking-widest text-beige-light mb-4">{SITE.DE.OPEN_HOURS}</h4>
				<div class="space-y-2">
					<div>
						<p class="font-sans text-xs font-semibold text-beige-dark">{SITE.DE.OPEN_HOURS_1}</p>
						<p class="font-sans text-xs text-stone">{SITE.DE.OPEN_HOURS_2}</p>
					</div>
					<div>
						<p class="font-sans text-xs font-semibold text-beige-dark">{SITE.DE.OPEN_HOURS_3}</p>
						<p class="font-sans text-xs text-stone">{SITE.DE.OPEN_HOURS_4}</p>
					</div>
				</div>
				<div class="mt-5">
					<address class="not-italic font-sans text-xs text-stone leading-relaxed">
						Gneisenaustr. 70<br />
						10961 Berlin-Kreuzberg
					</address>
				</div>
			</div>
		</div>

		<hr class="divider my-10 border-primary" />

		<div class="flex flex-col sm:flex-row items-center justify-between gap-3">
			<p class="font-sans text-xs text-stone">
				&copy; {new Date().getFullYear()} Antik70 Berlin. Alle Rechte vorbehalten.
			</p>
			<a href="https://antik70.de/shop/de/Impressum" class="font-sans text-xs text-stone hover:text-amber transition-colors">
				Impressum & Datenschutz
			</a>
		</div>
	</div>
</footer>
