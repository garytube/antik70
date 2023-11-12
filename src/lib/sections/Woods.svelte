<script lang="ts">
	import H2 from '$lib/components/H2.svelte';
	import P from '$lib/components/P.svelte';
	import Section from '$lib/components/Section.svelte';
	import Feature from '$lib/components/Feature.svelte';
	import Lamp from '$lib/assets/lamp.jpg';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import { SITE } from '../../_const';
	export let id = '';
</script>

<Section {id} circle>
	<H2>
		<span class="md:block">Ausgesuchte Holzmöbel & </span>
		traumhaft schöne Raritäten und Einzelstücke!
	</H2>
	<P class="mb-20">
		Antike Möbel aus den Epochen Biedermeier, Gründerzeit, Louis Philippe, Jugendstil und Art Deko, egal ob Schrank, Vertiko, Kommode,
		Küchenbuffet, Sekretär, ausgesuchte Einzelstücke oder traumhaft schöne Raritäten, furniert oder aus Weichholz stehen zur Auswahl
	</P>

	<div class="xl:grid xl:grid-cols-2">
		<div id="keyFacts">
			<Feature title="Hochwertige Restauration von Weichholzmöbeln">
				Unsere Weichholzmöbel werden mit Hingabe restauriert: Schleifen, Grundierung, Wachs und Polieren verleihen ihnen eine samtig
				glänzende Oberfläche. Wir kümmern uns auch um Holzwurmbeseitigung, Beschlagreparaturen und Schubladenleichtgängigkeit.
			</Feature>

			<Feature alternate title="Fachmännische Pflege & Aufbereitung">
				Restaurierte Holzmöbel und wohnfertige alte Möbel, furniert oder aus Weichholz, ausgesuchte Einzelstücke oder traumhaft schöne
				Raritäten können Sie auf den folgenden Seiten betrachten und bestellen.
			</Feature>

			<Feature title="Furnierte Möbel zum Wohnen & Sammeln">
				Wir hauchen alten Weichholzmöbeln neues Leben ein, indem wir ihre Oberflächen sorgfältig aufbereiten. Dieser Prozess umfasst das
				Schleifen, Wachsen und Polieren für eine samtig glänzende Optik, sowie die Behebung von Holzwurmschäden und Beschlagreparaturen.
			</Feature>
		</div>
		<div id="keyfacts_pictures" class="relative grid grid-cols-2 items-center gap-12 md:ml-28">
			<div class="col-1">
				<img src={Lamp} alt="antik70.de" class="rounded-[49px] border-[3px] border-primary-DARK my-4" />
				<LinkButton href={SITE.DE.SHOP_LINK}>{SITE.DE.SHOP_TEXT_1}</LinkButton>
			</div>
			<div class="col-2">
				<img src={Lamp} alt="antik70.de" class="rounded-[49px] border-[3px] border-primary-DARK my-4" />
				<img src={Lamp} alt="antik70.de" class="rounded-[49px] border-[3px] border-primary-DARK my-4" />
			</div>
		</div>
	</div>
</Section>

<style>
	.pic {
		width: 268px;
		height: 375px;
	}
</style>
