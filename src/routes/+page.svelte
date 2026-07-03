<script>
	import Lampenwelt from '$section/Lampenwelt.svelte';
	import Hero from '$section/Hero.svelte';
	import RepairHighlight from '$section/RepairHighlight.svelte';
	import AboutUs from '$section/AboutUs.svelte';
	import Restaurationen from '$section/Restaurationen.svelte';
	import { dev } from '$app/environment';
</script>

<svelte:head>
	{#if dev}
		<title>Antik70 - DEVELOPMENT SERVER</title>
	{:else}
		<title>Antik70 - Zeitlose Stücke aus Berlin</title>
	{/if}
	<meta
		name="description"
		content="Antik70 findet, restauriert und verkauft einzigartige Antiquitäten, Möbel und Lampen aus Berlin-Kreuzberg. Kein Shop — alles auf Anfrage. Seit 1991."
	/>
</svelte:head>

<Hero id="home" />
<Lampenwelt id="fundstuecke" />
<RepairHighlight />
<Restaurationen id="restaurierung" />
<AboutUs id="ueber-uns" />
