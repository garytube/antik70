<script>
	import MobileNav from './MobileNav.svelte';

	import MobileMenuButton from './MobileMenuButton.svelte';

	import Logo from './Logo.svelte';
	import ShopButton from './ShopButton.svelte';

	const links = [
		{
			label: 'Beleuchtung',
			href: '#'
		},
		{
			label: 'Antike Möbel',
			href: '#'
		},
		{
			label: 'Dienstleistungen',
			href: '#'
		},
		{
			label: 'Unsere Geschichte',
			href: '#'
		}
	];

	const toggleMenue = () => {
		mobileNavVisable = !mobileNavVisable;
	};

	let mobileNavVisable = false;
</script>

<ul
	class="hidden lg:flex flex-1 ml-4 xl:ml-10 items-center justify-center sm:items-center sm:justify-start space-x-2 xl:space-x-4 2xl:space-x-8 text-base xl:text-lg"
>
	{#each links as { label, href } (label)}
		<li>
			<a
				class="font-semibold rounded-text px-3 py-1.5 xl:px-4 xl:py-2 hover:bg-primary hover:text-white transition-colors duration-200 ease-in-out whitespace-nowrap"
				{href}
			>
				{label}
			</a>
		</li>
	{/each}

	<li class="xl:w-full xl:text-right"><ShopButton>Online Shop</ShopButton></li>
</ul>

<MobileMenuButton on:click={toggleMenue} open={mobileNavVisable} class="absolute z-50 top-0 right-4 flex items-center lg:hidden" />
<MobileNav bind:mobileNavVisable>
	{#each links as { label, href } (label)}
		<li>
			<a
				class="font-semibold rounded-text px-3 py-1.5 xl:px-4 xl:py-2 hover:bg-primary hover:text-white transition-colors duration-200 ease-in-out whitespace-nowrap"
				{href}
			>
				{label}
			</a>
		</li>
	{/each}
</MobileNav>

<div class="absolute w-full left-0 -top-14 text-center lg:hidden">
	<div class="px-8">
		<ShopButton>Online Shop</ShopButton>
	</div>
</div>
