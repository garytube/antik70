<script>
	import H2 from '$lib/components/H2.svelte';
	import P from '$lib/components/P.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import Section from '$lib/components/Section.svelte';
	import { SITE } from '$const';
	export let id = '';
	import lamp1 from '$assets/lamps/1.jpg';
	import lamp2 from '$assets/lamps/4.jpg';
	import lamp3 from '$assets/lamps/3.jpg';
</script>

<Section {id}>
	<H2 class="sm:text-center">{SITE.DE.LAMP_HEADLINE}</H2>
	<P class="sm:text-center leading-relaxed  lg:max-w-5xl mx-auto">
		{SITE.DE.LAMP_SUBLINE}
	</P>
	<LinkButton href="#">
		{SITE.DE.LAMP_CTA}
		<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 ml-1" viewBox="0 0 16.692 22.499">
			<path
				id="Path_11"
				data-name="Path 11"
				d="M12,18V12.75m0,0a6.01,6.01,0,0,0,1.5-.189M12,12.75a6.01,6.01,0,0,1-1.5-.189m3.75,7.478a12.06,12.06,0,0,1-4.5,0m3.75,2.383a14.406,14.406,0,0,1-3,0M14.25,18v-.192a2.782,2.782,0,0,1,1.508-2.316,7.5,7.5,0,1,0-7.517,0A2.783,2.783,0,0,1,9.75,17.808V18"
				transform="translate(-3.653 -0.752)"
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
			/>
		</svg>
	</LinkButton>

	<!-- lampen grid -->
	<div class="grid mt-16 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each [lamp1, lamp2, lamp3] as image}
			<div class="w-full h-[336px] border-4 border-primary-DARK rounded-xl overflow-hidden">
				<img class="w-full h-full object-cover" src={image} alt="DEMO" />
			</div>
		{/each}
	</div>
</Section>
