<script lang="ts">
	import Footer from '$section/Footer.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import './layout.css';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	let menuOpen = $state(false);
</script>

<!-- Announcement bar -->
<div class="bg-primary text-beige-light text-center py-2 px-4 text-xs tracking-widest uppercase font-sans">
	Kein Laden mehr — alles auf Anfrage &nbsp;·&nbsp; <a href="/#kontakt" class="underline underline-offset-2 hover:text-amber-light transition-colors">Jetzt melden</a>
</div>

<header class="sticky top-0 z-50 bg-beige-light border-b border-beige-dark">
	<div class="container mx-auto flex items-center justify-between h-16 md:h-20">
		<Logo />
		<!-- Desktop nav -->
		<Navigation />
		<!-- Mobile menu toggle -->
		<button
			class="lg:hidden flex flex-col gap-1.5 p-2"
			aria-label="Menü öffnen"
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span class="block w-6 h-0.5 bg-primary transition-all duration-200" class:rotate-45={menuOpen} class:translate-y-2={menuOpen}></span>
			<span class="block w-6 h-0.5 bg-primary transition-all duration-200" class:opacity-0={menuOpen}></span>
			<span class="block w-6 h-0.5 bg-primary transition-all duration-200" class:neg-rotate-45={menuOpen} class:-translate-y-2={menuOpen}></span>
		</button>
	</div>

	<!-- Mobile nav drawer -->
	{#if menuOpen}
		<nav class="lg:hidden border-t border-beige-dark bg-beige-light px-6 py-6 flex flex-col gap-5">
			<a href="/#fundstuecke" onclick={() => (menuOpen = false)} class="font-sans font-semibold text-primary text-lg tracking-wide hover:text-amber transition-colors">Fundstücke</a>
			<a href="/#restaurierung" onclick={() => (menuOpen = false)} class="font-sans font-semibold text-primary text-lg tracking-wide hover:text-amber transition-colors">Restaurierung</a>
			<a href="/#ueber-uns" onclick={() => (menuOpen = false)} class="font-sans font-semibold text-primary text-lg tracking-wide hover:text-amber transition-colors">Über uns</a>
			<a href="/#kontakt" onclick={() => (menuOpen = false)} class="font-sans font-semibold text-primary text-lg tracking-wide hover:text-amber transition-colors">Kontakt</a>
			<a href="/#kontakt" onclick={() => (menuOpen = false)} class="mt-2 inline-flex items-center justify-center bg-primary text-beige-light font-semibold text-sm tracking-wide px-5 py-3 rounded-full hover:bg-amber transition-colors">Anfragen</a>
		</nav>
	{/if}
</header>

<main>
	{@render children?.()}
</main>

<Footer />

<style>
	:global(html) {
		overflow-x: hidden;
		background-color: #F5EDE3;
		scroll-behavior: smooth;
	}

	:global(body) {
		color: #2C1A12;
		font-family: 'Source Sans Pro', sans-serif;
	}

	.neg-rotate-45 {
		transform: rotate(-45deg);
	}
</style>
