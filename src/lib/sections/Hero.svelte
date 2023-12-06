<script lang="ts">
	import { SITE } from '$const';
	import H1 from '$lib/components/H1.svelte';
	import H3 from '$lib/components/H3.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import Slideshow from '$lib/components/Slideshow.svelte';
	export let id: string;

	const pictures = import.meta.glob('/src/assets/**/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}', {
		eager: true,
		as: 'url'
	});
</script>

<section {id} class=" lg:container lg:mx-auto xl:pt-12 mb-8 md:mb-20 lg:mb-32">
	<div class="grid items-center gap-6 sm:gap-12 lg:gap-6 xl:gap-4 2xl:gap-0 md:grid-cols-hero lg:grid-cols-2">
		<!-- hero text -->
		<div class="mx-6 lg:mx-0 order-2 md:order-1">
			<H1>{SITE.DE.HERO_HEADLINE}</H1>
			<H3>
				{SITE.DE.HERO_SUBLINE}
			</H3>
			<LinkButton shop_icon></LinkButton>
		</div>

		<!-- hero image -->
		<div class=" order-1 md:order-1">
			<Slideshow speed={8000} {pictures} />
		</div>
	</div>
</section>
