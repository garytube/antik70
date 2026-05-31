<script lang="ts">
	import { SITE } from '$const';
	import ShopButton from './ShopButton.svelte';
</script>

<ul
	class="ml-4 hidden flex-1 items-center justify-center space-x-2 text-base sm:items-center sm:justify-start lg:flex xl:ml-10 xl:space-x-4 xl:text-lg 2xl:space-x-8"
>
	{#each SITE.DE.NAVI_LINKS as { label, href } (label)}
		<li>
			<a
				class="rounded-text hover:bg-primary px-3 py-1.5 font-semibold whitespace-nowrap transition-colors duration-200 ease-in-out hover:text-white xl:px-4 xl:py-2"
				{href}
			>
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
