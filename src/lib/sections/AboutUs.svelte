<script lang="ts">
	import Store from '$assets/store.png';
	import H2 from '$lib/components/H2.svelte';
	import P from '$lib/components/P.svelte';
	import Section from '$lib/components/Section.svelte';
	import FeatureBox from '$lib/components/FeatureBox.svelte';
	import Feature from '$lib/components/Feature.svelte';
	import OpenHoures from '$lib/components/OpenHoures.svelte';
	import FeatureBlock from './FeatureBlock.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
	export let id = '';
</script>

<Section container {id} circle>
	<div class="grid about_grid max-w-[1660px] mx-auto">
		<div class="col-1 pr-24">
			<H2>Antik70 - Seit 1991 im Antik und Beleuchtungsbereich</H2>
			<P>
				Antik70 ist ein kleines Team mit vielen individuellen Stärken, die wir seit mehr als 30 Jahren bündeln. Seit 1991 sind wir in gleicher Besetzung im Antik und
				Beleuchtungsbereich tätig und immer in Berlin-Kreuzberg. <br /><br />Neben einer qualifizierten und ausführlichen Beratung in unseren Geschäftsräumen mir mehr als 150 qm
				Ausstellungsfläche bieten wir „Probewohnen“ Lieferung und Aufbau in Berlin und nahem Umland, Ankauf, Abholungen, Anfertigungen und Montagen von Lampen sowie viele weitere
				Leistungen an. Reden Sie mit uns.
			</P>
			<div class="mt-8 mb-4">
				<iframe
					class="w-full rounded-md drop-shadow-md h-80"
					title="Antik70"
					src="https://www.openstreetmap.org/export/embed.html?bbox=13.400115072727205%2C52.489708834295506%2C13.4024915099144%2C52.49123259056697&amp;layer=mapnik&amp;marker=52.490470719030405%2C13.4013032913208"
				></iframe>
				<div itemscope itemtype="http://schema.org/LocalBusiness" class="grid anfahrt-grid justify-around mx-auto p-4">
					<address class="text-md not-italic" itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
						<h4 class="text-lg font-bold">Adresse</h4>
						<p>Antik 70</p>
						<p itemprop="streetAddress">Gneisenaustr. 70</p>
						<p itemprop="postalCode">10961 <span itemprop="addressLocality">Berlin</span></p>
					</address>
					<div>
						<h4 class="text-lg font-bold">Anfahrt</h4>
						<ul class=" text-sm">
							<li><strong>U-Bahn</strong> (U7) Südstern oder Gneisenaustr</li>
							<li><strong>Bus</strong> (140) hält an Gneisenaustr./Baerwaldstr</li>
							<li><strong>PKW</strong> Parkzone 61 (Kostenpflichtig)</li>
						</ul>
					</div>
					<LinkButton href="https://www.google.com/maps?q=Gneisenaustr.+70,+10961+Berlin" target="_blank">Google Maps</LinkButton>
				</div>
			</div>
			<Feature title="Unsere Nachhaltigkeit">
				<P>
					Reparieren und Restaurieren ist schon nachhaltiger als nur neue Sachen kaufen; dazu nutzen wir soweit als möglich alte und vorhandene Teile wie Beschläge, Schlösser,
					Altholz usw. Unsere Weichholzmöbel werden nicht abgelaugt oder abgebeizt sondern händisch oder maschinell geschliffen. Grundierung und Finish vieler Möbel ist Schelllack;
					Weichholz-Oberflächen werden mit einem speziellem Antikwachs schonend aufpoliert
				</P>
			</Feature>
			<Feature title="Versand">
				<P>
					Für den Versand nutzen wir hauptsächlich gebrauchte Kartonagen, in den allermeisten Fällen Papierklebeband, als Füllmaterial recyceltes Packpapier, bei stark
					bruchgefährdeten Artikeln kommt Luftpolsterfolie zum Einsatz, Lieferscheintaschen aus Papier und wenn nötig gebrauchte Paletten. Beim Palettenversand wird aus
					versicherungstechnischen Gründen Stretchfolie verwandt. Als Versender kommen soweit als möglich Co2 neutrale Anbieter zum Einsatz. Ansonsten werden alle vernünftigen,
					machbaren und bezahlbaren Verbesserungen in unsere Abläufe integriert.
				</P>
			</Feature>
		</div>

		<div class="col-2 grid columns-1 items-start gap-y-6 h-min">
			<img src={Store} alt="Gneisenaustraße 70 - 10961 Berlin Kreuzberg" class="rounded-xl border-[3px] border-primary-DARK" />
			<div id="open" class="self-start justify-self-start text-left grid grid-cols-3 gap-3 justify-evenly">
				<OpenHoures />
			</div>
			<FeatureBox
				title="Porzellan"
				description="Diverse Einzelteile und komplette Service von Hutschenreuther und Rosenthal."
				cta="Tisch und Wohndekoration"
				href="https://antik70.de/shop/de/wohndekoration/porzellan"
			/>
			<FeatureBox
				title="Raritäten "
				description="Sammlerstücke, die nicht jeder hat, außergewöhnliche Gegenstände zum Nutzen oder Dekorieren."
				cta="Antike Möbel & Pflege"
				href="https://antik70.de/shop/raritaeten"
			/>
			<FeatureBox
				title="Unsere Uhren"
				description="Unsere kleine aber feine Auswahl an alten Wand - Tisch oder Standuhren."
				cta="Uhren"
				href="https://antik70.de/shop/de/wohndekoration/uhren"
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

	.anfahrt-grid {
		font-size: 14px;
		display: grid;
		grid-template-columns: 150px 1fr auto;
		gap: 2rem;
		align-items: first flex-start;
	}
</style>
