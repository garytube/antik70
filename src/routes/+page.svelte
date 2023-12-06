<script>
	import LampenFeatures from '$section/Lamps.svelte';
	import Hero from '$section/Hero.svelte';
	import Mega from '$section/MegaBlock.svelte';
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
<LampenFeatures id="lampen" />
<Mega id="restaurationen" />
<AboutUs id="antik70" />
