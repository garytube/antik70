<script lang="ts">
	import { SITE } from '$const';
	import ShopButton from './ShopButton.svelte';
	export let links = SITE.DE.NAVI_LINKS;
</script>

<ul class="hidden lg:flex flex-1 ml-4 xl:ml-10 items-center justify-center sm:items-center sm:justify-start space-x-2 xl:space-x-4 2xl:space-x-8 text-base xl:text-lg">
	{#each links as { label, href } (label)}
		<li>
			<a class="font-semibold rounded-text px-3 py-1.5 xl:px-4 xl:py-2 hover:bg-primary hover:text-white transition-colors duration-200 ease-in-out whitespace-nowrap" {href}>
				{label}
			</a>
		</li>
	{/each}

	<li class="xl:w-full xl:text-right"><ShopButton>Online Shop</ShopButton></li>
</ul>
<!-- 	Mobile Online Shop Button -->
<div class="absolute right-6 lg:hidden">
	<ShopButton solid>Online Shop</ShopButton>
</div>
