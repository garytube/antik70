<script lang="ts">
	import { SITE } from '$const';
	import Slideshow from '$lib/components/Slideshow.svelte';
	import pic4 from '$assets/lamps/4.webp';
	import pic5 from '$assets/store.webp';
	import pic6 from '$assets/2024/IMG_5833.webp';
	import IMG_5827 from '$assets/2024/IMG_5827.webp';

	interface Props {
		id: string;
	}

	let { id }: Props = $props();

	const pictures = [pic5, IMG_5827, pic4, pic6];
</script>

<section {id} class="bg-beige-light overflow-hidden">
	<!-- Ticker bar -->
	<div class="bg-amber text-primary overflow-hidden py-2.5">
		<div class="flex whitespace-nowrap animate-ticker">
			{#each Array(2) as _}
				<span class="font-sans font-bold text-xs tracking-widest uppercase mr-0">
					{#each ['Auf Anfrage', 'Restauriert', 'Einzelstücke', 'Berlin Kreuzberg', 'Seit 1991', 'Handarbeit', 'Zeitlose Stücke', 'Direkt vom Restaurator'] as item}
						<span class="inline-block mx-6">{item}</span>
						<span class="inline-block mx-2 opacity-50">·</span>
					{/each}
				</span>
			{/each}
		</div>
	</div>

	<!-- Hero content -->
	<div class="container mx-auto py-16 md:py-20 xl:py-28">
		<div class="grid md:grid-cols-2 gap-10 xl:gap-16 items-center">
			<!-- Text side -->
			<div class="order-2 md:order-1">
				<p class="font-sans text-xs font-bold tracking-widest2 uppercase text-amber mb-5">
					Berlin-Kreuzberg · Seit 1991
				</p>
				<h1 class="font-serif text-4xl md:text-5xl xl:text-6xl text-primary leading-tight text-pretty mb-6">
					{SITE.DE.HERO_HEADLINE}
				</h1>
				<p class="font-sans text-base xl:text-lg text-stone leading-relaxed mb-10 max-w-md text-pretty">
					{SITE.DE.HERO_SUBLINE}
				</p>
				<div class="flex flex-wrap gap-4">
					<a
						href="/#fundstuecke"
						class="inline-flex items-center gap-2 bg-primary text-beige-light font-semibold font-sans text-sm tracking-wide px-6 py-3.5 rounded-full hover:bg-amber-dark transition-colors duration-200"
					>
						Aktuelle Fundstücke ansehen
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
							<path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
						</svg>
					</a>
					<a
						href="/#kontakt"
						class="inline-flex items-center gap-2 border-2 border-primary text-primary font-semibold font-sans text-sm tracking-wide px-6 py-3.5 rounded-full hover:bg-beige-dark transition-colors duration-200"
					>
						Kontakt aufnehmen
					</a>
				</div>

				<!-- Stats -->
				<div class="mt-12 flex gap-10 border-t border-beige-dark pt-8">
					<div>
						<p class="font-serif text-3xl text-primary">30+</p>
						<p class="font-sans text-xs text-stone uppercase tracking-widest mt-0.5">Jahre Erfahrung</p>
					</div>
					<div>
						<p class="font-serif text-3xl text-primary">100%</p>
						<p class="font-sans text-xs text-stone uppercase tracking-widest mt-0.5">Handarbeit</p>
					</div>
					<div>
						<p class="font-serif text-3xl text-primary">Berlin</p>
						<p class="font-sans text-xs text-stone uppercase tracking-widest mt-0.5">Kreuzberg</p>
					</div>
				</div>
			</div>

			<!-- Image side -->
			<div class="order-1 md:order-2">
				<Slideshow speed={5000} {pictures} />
			</div>
		</div>
	</div>
</section>
