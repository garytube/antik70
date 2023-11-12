<script lang="ts">
	import Lamp from '$assets/lamp.jpg';
	import H2 from '$lib/components/H2.svelte';
	import P from '$lib/components/P.svelte';
	import Section from '$lib/components/Section.svelte';
	import FeatureBox from '$lib/components/FeatureBox.svelte';
	export let id = '';
</script>

<Section container {id} circle>
	<div class="grid about_grid max-w-[1660px] mx-auto">
		<div class="col-1 pr-24">
			<H2>Antik70 <br />Seit 1991 im Antik und Beleuchtungsbereich</H2>
			<P>
				Antik70 ist ein kleines Team mit vielen individuellen Stärken, die wir seit mehr als 30 Jahren bündeln. Seit 1991 sind wir in
				gleicher Besetzung im Antik und Beleuchtungsbereich tätig und immer in Berlin-Kreuzberg.
			</P>
			<div class="my-12">karte</div>
			<P class="mb-20 leading-relaxed"
				>Neben einer qualifizierten und ausführlichen Beratung in unseren Geschäftsräumen mir mehr als 150 qm Ausstellungsfläche bieten wir
				„Probewohnen“ Lieferung und Aufbau in Berlin und nahem Umland, Ankauf, Abholungen, Anfertigungen und Montagen von Lampen sowie viele
				weitere Leistungen an. Reden Sie mit uns.</P
			>
		</div>
		<div class="col-2">
			<img src={Lamp} alt="Gneisenaustraße 70 - 10961 Berlin Kreuzberg" class="rounded-[49px] border-[3px] border-primary-DARK mb-8" />
			<FeatureBox
				title="Porzellan"
				description="Diverse Einzelteile und komplette Service von Hutschenreuther und Rosenthal."
				cta="Tisch und Wohndekoration"
				href="/"
			/>
			<FeatureBox
				title="Restaurationen "
				description="Wir führen Reparaturen &  Restaurationen mit höchster Sorgfalt und Fachwissen durch."
				cta="Antike Möbel & Pflege"
				href="/"
			/>
			<FeatureBox
				title="Ersatzgläser "
				description="Unsere große Auswahl an alten und neuen Glasschirmen. Teilweise mehr als 100 Jahre alt!"
				cta="Ersatzgläser"
				href="/"
			/>
		</div>
	</div>
</Section>

<style>
	.about_grid {
		display: grid;
		grid-template-columns: 1.5fr 0.6fr;
		grid-template-rows: auto;
		gap: 2rem;
	}
</style>
