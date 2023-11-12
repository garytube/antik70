<script>
	import Lamps from '$section/Lamps.svelte';
	import Woods from '$section/Woods.svelte';
	import Hero from '$section/Hero.svelte';
	import Mega from '$section/Mega.svelte';
	import AboutUs from '$section/AboutUs.svelte';
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
<AboutUs id="antik70" />
