<script>
	import Navigation from '$lib/components/Navigation.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import '../app.postcss';
</script>

<header class="px-8 lg:container relative flex mt-16 mb-8">
	<Logo />
	<Navigation />
</header>

<slot />

<style lang="postcss">
	:global(html) {
		@apply bg-beige;
	}

	:global(body) {
		@apply text-primary;
	}
</style>
