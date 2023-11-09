<script lang="ts">
	import H2 from '$lib/components/H2.svelte';
	import P from '$lib/components/P.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import Section from '$lib/components/Section.svelte';
	export let id = '';
</script>

<div class="relative">
	<div class="z-10">
		<Section {id} circle>
			<H2>
				<span class="md:block">Ausgesuchte Holzmöbel & </span>
				traumhaft schöne Raritäten und Einzelstücke.
			</H2>
			<P>
				Antike Möbel aus den Epochen Biedermeier, Gründerzeit, Louis Philippe, Jugendstil und Art Deko, egal ob Schrank, Vertiko, Kommode,
				Küchenbuffet, Sekretär, ausgesuchte Einzelstücke oder traumhaft schöne Raritäten, furniert oder aus Weichholz stehen zur Auswahl
			</P>
		</Section>
	</div>
</div>
