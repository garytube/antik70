<script lang="ts">
	import { SITE } from '$const';
	import Lamp from '$assets/lamp.jpg';
	import H2 from '$lib/components/H2.svelte';
	import P from '$lib/components/P.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';

	export let id = '';
</script>

<div {id} class="text-white flex justify-center relative bg-primary-DARK max-h-[896px] overflow-hidden">
	<div class="flex flex-col flex-wrap items-center justify-center h-full max-w-4xl z-20 py-32">
		<H2 class="text-center text-white">{SITE.DE.MEGA_HEADLINE}</H2>
		<P class="text-center">
			{SITE.DE.MEGA_SUBLINE} <br />
			<span class="font-bold mt-2 block">Zögern Sie nicht, uns zu kontaktieren!</span>
		</P>
		<LinkButton alternate href={SITE.SHOP_LINK}>{SITE.DE.MEGA_CTA}</LinkButton>
	</div>
	<div class="overlay absolute bg-primary-DARK bg-opacity-90 w-full h-full inset-0 z-10"></div>
	<div class="grid grid-cols-3 grid-rows-2 absolute z-0 w-full h-full">
		<img class="h-full w-full object-cover" src={Lamp} alt="antik70" />
		<img class="h-full w-full object-cover" src={Lamp} alt="antik70" />
		<img class="h-full w-full object-cover" src={Lamp} alt="antik70" />
		<img class="h-full w-full object-cover" src={Lamp} alt="antik70" />
		<img class="h-full w-full object-cover" src={Lamp} alt="antik70" />
		<img class="h-full w-full object-cover" src={Lamp} alt="antik70" />
	</div>
</div>
