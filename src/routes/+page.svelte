<script>
	import Lamps from '$lib/sections/Lamps.svelte';
	import Woods from '$lib/sections/Woods.svelte';
	import Hero from './../lib/sections/Hero.svelte';
	import Mega from './../lib/sections/Mega.svelte';
</script>

<svelte:head>
	<title>Antik70 - Zeitlose Eleganz</title>
	<meta
		name="description"
		content="Jedes Möbelstück erzählt eine Geschichte vergangener Epochen, mit Liebe restauriert und bereit, Ihr Zuhause mit zeitloser Eleganz zu schmücken. Tauchen Sie ein in unsere Welt, in der Geschichte und Stil sich vereinen. "
	/>
</svelte:head>

<Hero id="home" />
<Lamps id="lampen" />
<Woods id="holz-moebel" />
<Mega id="mega" />
