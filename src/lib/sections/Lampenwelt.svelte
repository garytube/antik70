<script lang="ts">
	import { SITE } from '$const';
	import H2 from '$lib/components/H2.svelte';
	import Section from '$lib/components/Section.svelte';
	import Feature from '$lib/components/Feature.svelte';
	import pic1 from '$assets/lamps/1.webp';
	import pic3 from '$assets/lamps/3.webp';
	import pic4 from '$assets/2024/IMG_5828.webp';
	import pic5 from '$assets/2024/IMG_5830.webp';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import A from '$lib/components/A.svelte';
	import H3 from '$lib/components/H3.svelte';
	export let id = '';
</script>

<Section {id} circle>
	<H2>{SITE.DE.LAMP_HEADLINE}</H2>
	<H3 class="mb-12">
		Entdecken Sie bei uns ein umfangreiches Sortiment an alten und neuen Lampen, das keine Wünsche offen lässt. Von der zeitlosen Eleganz unserer <A href={SITE.SHOP_TIFFANY}>
			Tiffany-Lampen
		</A>
		bis hin zu unseren höhenverstellbaren Zug- und Pendelleuchten, Plafonieren, Wandlampen und edlen Tisch- und Stehleuchten aus Messing. Jede unserer Lampen ist nicht nur eine reine
		Leuchtquelle sondern ein hochwertiges und prägendes Einrichtungsstück.
	</H3>

	<div class="xl:grid xl:grid-cols-2">
		<div id="keyFacts">
			{#each SITE.DE.LAMP_FEATURES as feature}
				<Feature title={feature.title}>
					{feature.text}
					<LinkButton href={feature.href}>{feature.cta}</LinkButton>
				</Feature>
			{/each}
		</div>
		<div id="keyfacts_pictures" class=" hidden lg:grid picture_grid gap-6 md:ml-28">
			<img src={pic1} alt="antik70.de" class=" rounded-[8px] border-[3px] border-primary-DARK" />
			<img src={pic3} alt="antik70.de" class=" rounded-[8px] border-[3px] border-primary-DARK" />
			<img src={pic4} alt="antik70.de" class=" rounded-[8px] border-[3px] border-primary-DARK" />
			<img src={pic5} alt="antik70.de" class=" rounded-[8px] border-[3px] border-primary-DARK" />
		</div>
	</div>
</Section>

<style>
	.picture_grid {
		grid-template-columns: minmax(160px, 230px) minmax(160px, 230px);
		grid-template-areas:
			'pic1 pic2'
			'pic3 pic4'
			'shop_btn shop_btn';
	}
</style>
