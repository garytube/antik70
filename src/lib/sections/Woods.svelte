<script lang="ts">
	import H2 from '$lib/components/H2.svelte';
	import P from '$lib/components/P.svelte';
	import Section from '$lib/components/Section.svelte';
	import Feature from '$lib/components/Feature.svelte';
	import Lamp from '$assets/lamp.jpg';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import { SITE } from '$const';
	export let id = '';
</script>

<Section {id} circle>
	<H2>Ausgesuchte Holzmöbel & traumhaft schöne Raritäten und Einzelstücke!</H2>
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
		<div id="keyfacts_pictures" class=" hidden lg:grid grid-cols-2 items-center gap-12 md:ml-28">
			<div class="col-1">
				<img src={Lamp} alt="antik70.de" class="rounded-[49px] border-[3px] border-primary-DARK my-4" />
				<LinkButton href={SITE.SHOP_LINK}
					>{SITE.DE.SHOP_TEXT_1}
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class=" fill-current ml-2 xl:ml-3 2xl:ml-4 h-6 lg:h-8">
						<path
							fill-rule="evenodd"
							d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
							clip-rule="evenodd"
						/>
					</svg></LinkButton
				>
			</div>
			<div class="col-2">
				<img src={Lamp} alt="antik70.de" class="rounded-[49px] border-[3px] border-primary-DARK my-4" />
				<img src={Lamp} alt="antik70.de" class="rounded-[49px] border-[3px] border-primary-DARK my-4" />
			</div>
		</div>
	</div>
</Section>
