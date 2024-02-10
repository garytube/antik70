<script lang="ts">
	import { SITE } from '$const';
	import pic1 from '$assets/lamps/1.webp';
	import pic2 from '$assets/lamps/2.webp';
	import pic3 from '$assets/lamps/3.webp';
	import pic4 from '$assets/lamps/4.webp';
	import pic5 from '$assets/store.webp';
	import pic6 from '$assets/store.webp';

	const pictures = [pic1, pic2, pic3, pic4, pic5, pic6];

	import H2 from '$lib/components/H2.svelte';
	import P from '$lib/components/P.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';

	export let id = '';
</script>

<div {id} class="text-white flex justify-center relative bg-primary-DARK max-h-[896px] overflow-hidden">
	<div class="flex flex-col flex-wrap items-center justify-center h-full max-w-4xl z-20 py-32">
		<H2 class="text-center text-white">{SITE.DE.RESTORE_HEADLINE}</H2>
		<P class="text-center">
			Wir sind Experten für Reparaturen und Restaurationen. Sie können sich darauf verlassen, dass wir Ihre Möbel in ihren ursprünglichen Glanz versetzen oder sie in etwas Neues
			<br />und Aufregendes verwandeln können.
			<span class="font-bold mt-2 block">Zögern Sie nicht, uns zu kontaktieren!</span>
		</P>
		<LinkButton alternate shop_icon href="https://antik70.de/shop/de/antike-moebel">Unser Reparatur Serive</LinkButton>
	</div>
	<div class="overlay absolute bg-primary-VERYDARK bg-opacity-90 w-full h-full inset-0 z-10"></div>
	<div class="grid grid-cols-3 grid-rows-2 absolute z-0 w-full h-full">
		{#each pictures as pic}
			<img class="h-full w-full object-cover" src={pic} alt="antik70" />
		{/each}
	</div>
</div>
