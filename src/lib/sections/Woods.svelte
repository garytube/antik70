<script lang="ts">
	import H2 from '$lib/components/H2.svelte';
	import P from '$lib/components/P.svelte';
	import Section from '$lib/components/Section.svelte';
	import Feature from '$lib/components/Feature.svelte';
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

	<Feature title="Hochwertige Restauration von Weichholzmöbeln">
		Unsere Weichholzmöbel werden mit Hingabe restauriert: Schleifen, Grundierung, Wachs und Polieren verleihen ihnen eine samtig glänzende
		Oberfläche. Wir kümmern uns auch um Holzwurmbeseitigung, Beschlagreparaturen und Schubladenleichtgängigkeit.
	</Feature>

	<Feature reverse title="Fachmännische Pflege & Aufbereitung">
		Restaurierte Holzmöbel und wohnfertige alte Möbel, furniert oder aus Weichholz, ausgesuchte Einzelstücke oder traumhaft schöne Raritäten
		können Sie auf den folgenden Seiten betrachten und bestellen.
	</Feature>

	<Feature title="Furnierte Möbel zum Wohnen & Sammeln">
		Wir hauchen alten Weichholzmöbeln neues Leben ein, indem wir ihre Oberflächen sorgfältig aufbereiten. Dieser Prozess umfasst das
		Schleifen, Wachsen und Polieren für eine samtig glänzende Optik, sowie die Behebung von Holzwurmschäden und Beschlagreparaturen.
	</Feature>
</Section>
