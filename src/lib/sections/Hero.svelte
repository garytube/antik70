<script lang="ts">
	import { SITE } from '$const';
	import H1 from '$lib/components/H1.svelte';
	import H3 from '$lib/components/H3.svelte';
	import Slideshow from '$lib/components/Slideshow.svelte';
	export let id = '';
	const pictures = import.meta.glob('/src/assets/lamps/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}', {
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
			<a
				href="#lampen"
				class="text-lg lg:text-xl mt-8 2xl:mt-10 shadow-lg pl-4 pr-2 lg:pr-4 flex flex-row items-center max-w-max btn h-10 lg:h-14 rounded-xl lg:rounded-2xl bg-primary text-white hover:bg-highlight hover:text-primary whitespace-nowrap"
			>
				{SITE.DE.HERO_CTA}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class=" fill-current ml-2 xl:ml-3 2xl:ml-4 h-6 lg:h-8">
					<path
						fill-rule="evenodd"
						d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
						clip-rule="evenodd"
					/>
				</svg>
			</a>
		</div>

		<!-- hero image -->
		<div class=" order-1 md:order-1">
			<Slideshow {pictures} />
		</div>
	</div>
</section>
