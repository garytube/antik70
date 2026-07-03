<script lang="ts">
	import { SITE } from '$const';
	import pic1 from '$assets/lamps/1.webp';
	import pic2 from '$assets/lamps/2.webp';
	import pic3 from '$assets/lamps/3.webp';
	import pic4 from '$assets/lamps/4.webp';
	import antik1 from '$assets/antik_moebel/antik_moebel_1.jpg';
	import antik2 from '$assets/antik_moebel/antik_moebel_2.jpg';

	interface Props {
		id?: string;
	}

	let { id = '' }: Props = $props();

	// Map finds to images — cycling through available assets
	const findImages = [antik1, pic1, antik2, pic2, pic3, pic4];
</script>

<section {id} class="bg-beige py-20 xl:py-28">
	<div class="container mx-auto">
		<!-- Section header -->
		<div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
			<div>
				<p class="font-sans text-xs font-bold tracking-widest2 uppercase text-amber mb-3">
					On-Demand
				</p>
				<h2 class="font-serif text-4xl xl:text-5xl text-primary text-balance">
					{SITE.DE.FINDS_HEADLINE}
				</h2>
			</div>
			<p class="font-sans text-base text-stone leading-relaxed max-w-sm text-pretty">
				{SITE.DE.FINDS_SUBLINE}
			</p>
		</div>

		<hr class="divider mb-14" />

		<!-- Grid of finds -->
		<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each SITE.DE.FINDS as find, i (find.title)}
				<article class="group flex flex-col bg-beige-light rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
					<!-- Image -->
					<div class="relative overflow-hidden aspect-[4/3] bg-beige-dark">
						<img
							src={findImages[i % findImages.length]}
							alt={find.title}
							class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
						/>
						<div class="absolute top-3 left-3">
							<span class="tag {find.status === 'Verfügbar' ? 'tag-available' : 'tag-reserved'}">
								{find.status}
							</span>
						</div>
					</div>

					<!-- Card body -->
					<div class="flex flex-col flex-1 p-6">
						<p class="font-sans text-xs text-stone uppercase tracking-widest mb-2">{find.period}</p>
						<h3 class="font-serif text-xl text-primary mb-3 leading-snug">{find.title}</h3>
						<p class="font-sans text-sm text-stone leading-relaxed flex-1 text-pretty">{find.description}</p>

						{#if find.status === 'Verfügbar'}
							<a
								href="/#kontakt"
								class="mt-6 inline-flex items-center gap-1.5 text-primary font-sans font-semibold text-sm hover:text-amber transition-colors duration-200 group/link"
							>
								Anfragen
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 translate-x-0 group-hover/link:translate-x-1 transition-transform duration-200">
									<path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
								</svg>
							</a>
						{:else}
							<p class="mt-6 font-sans text-xs text-stone italic">Bereits reserviert</p>
						{/if}
					</div>
				</article>
			{/each}
		</div>

		<!-- CTA banner -->
		<div class="mt-16 bg-primary rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
			<div>
				<h3 class="font-serif text-2xl md:text-3xl text-beige-light mb-2 text-balance">
					Suchen Sie etwas Bestimmtes?
				</h3>
				<p class="font-sans text-beige-dark text-base leading-relaxed max-w-md">
					Beschreiben Sie uns Ihren Wunsch — wir halten gezielt Ausschau und melden uns, sobald das passende Stück auftaucht.
				</p>
			</div>
			<a
				href="/#kontakt"
				class="shrink-0 inline-flex items-center gap-2 bg-amber text-primary font-sans font-bold text-sm tracking-wide px-7 py-4 rounded-full hover:bg-amber-light transition-colors duration-200"
			>
				Wunsch mitteilen
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
					<path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
				</svg>
			</a>
		</div>
	</div>
</section>
