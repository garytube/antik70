<script lang="ts">
	import H2 from '$lib/components/H2.svelte';
	import Section from '$lib/components/Section.svelte';
	import Feature from '$lib/components/Feature.svelte';
	import H3 from '$lib/components/H3.svelte';
	import pic from '$assets/2024/IMG_5833.webp';
	import { SITE } from '$const';
	export let id = '';
</script>

<Section {id} circle>
	<div class="grid lg:grid-cols-2 gap-12 mb-12 items-start">
		<div>
			<H2>Restaurationen</H2>
			<H3 class="text-pretty">
				{SITE.DE.RESTORE_TEXT}
			</H3>
		</div>
		<img class="rounded-md lg:object-contain lg:max-h-[300px] ml-auto border-4" src={pic} alt="Restaurationen" />
	</div>
	<div class="grid lg:grid-cols-2 lg:gap-20">
		{#each SITE.DE.RESTORE_FEATURES as feature}
			<Feature title={feature.title}>{feature.text}</Feature>
		{/each}
	</div>

	<div class="text-center text-pretty flex flex-col justify-center items-center text-white py-12 px-4 bg-gradient-to-b from-primary to-primary-DARK">
		<h2 class="text-3xl lg:leading-tight mb-4 font-serif">{SITE.DE.RESTORE_CONTACT_TITLE}</h2>
		<p class="text-xl lg:leading-tight">{SITE.DE.RESTORE_CONTACT_TEXT}</p>
		<div class="grid md:grid-cols-2 gap-4 mt-8">
			<div class="text-xl border-2 flex flex-row gap-2 items-center max-w-max py-1 px-2 rounded-md">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
					/>
				</svg>
				<a href="tel:{SITE.TELEPHONE.LANDLINE_HREF}">{SITE.TELEPHONE.LANDLINE_HREF}</a>
			</div>
			<div class="text-xl border-2 flex flex-row gap-2 items-center max-w-max py-1 px-2 rounded-md">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
					/>
				</svg>
				<a href="mailto:{SITE.EMAIL_HREF}">{SITE.EMAIL}</a>
			</div>
		</div>
	</div>
</Section>
