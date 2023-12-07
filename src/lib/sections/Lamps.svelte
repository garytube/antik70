<script lang="ts">
	import H2 from '$lib/components/H2.svelte';
	import P from '$lib/components/P.svelte';
	import Section from '$lib/components/Section.svelte';
	import Feature from '$lib/components/Feature.svelte';
	import pic1 from '$assets/lamps/1.jpg';
	import pic3 from '$assets/lamps/3.jpg';
	import pic4 from '$assets/lamps/4.jpg';
	import pic5 from '$assets/lamps/5.jpg';
	import LinkButton from '$lib/components/LinkButton.svelte';

	export let id = '';
</script>

<Section {id} circle>
	<H2>Beleuchtung der besonderen Art Vielfalt und Einzigartigkeit unsere Lampenwelt</H2>
	<P class="mb-12">
		Antike Möbel aus den Epochen Biedermeier, Gründerzeit, Louis Philippe, Jugendstil und Art Deko, egal ob Schrank, Vertiko, Kommode, Küchenbuffet, Sekretär, ausgesuchte
		Einzelstücke oder traumhaft schöne Raritäten, furniert oder aus Weichholz stehen zur Auswahl.
	</P>

	<div class="xl:grid xl:grid-cols-2">
		<div id="keyFacts">
			<Feature title="Alte Lampen & Lampengestelle">
				Wir führen ausgewählte alte Lampengläser, die teilweise mehr als 100 Jahre alt sind. Die Schirme sind gebraucht aber nicht defekt. Minimale Abplatzer am Glashalter sind
				nach jahrelangen Gebrauch als normal anzusehen. Weitere Einzelstücke können Sie in unseren Ausstellungsräumen betrachten
				<LinkButton shop_icon href="https://antik70.de/shop/de/lampenglaeser/antike-lampenschirme">Antike Lampenschirme</LinkButton>
			</Feature>

			<Feature alternate title="Glasschirm Ersatzglas Lampenglas">
				Klassische Formen, diverse Farben, spezielle Oberflächen und verschiedene Größen der einzelnen Modelle ergeben eine ungeahnte Vielfalt zur Bestückung Ihrer Lampengestelle.
				<LinkButton shop_icon href="https://antik70.de/shop/lampenglaeser/glasschirme-farbig-lampenglas">Farbig Lampengläser</LinkButton>
			</Feature>

			<Feature title="Tiffany Lampen">
				Für Viele die Königsdisziplin der Lichtkunst. Tiffanylampen für Tisch, Decke, Wand und Boden; jeweils in höchster Perfektion gearbeitete Schirme, die den originalen
				Vorbildern zur Ehre gereichen. Wir bieten einige ausgewählte Lampen mit Tiffanyschirmen an
				<LinkButton shop_icon href="https://antik70.de/shop/de/beleuchtung/tiffany-leuchten">Lampenmodelle in unserer Ausstellung</LinkButton>
			</Feature>
		</div>
		<div id="keyfacts_pictures" class=" hidden lg:grid picture_grid gap-8 md:ml-28">
			<img src={pic1} alt="antik70.de" class="pic1 rounded-[8px] border-[3px] border-primary-DARK" />
			<img src={pic5} alt="antik70.de" class="pic3 rounded-[8px] border-[3px] border-primary-DARK" />
			<img src={pic3} alt="antik70.de" class="pic4 rounded-[8px] border-[3px] border-primary-DARK" />
			<img src={pic4} alt="antik70.de" class="pic2 rounded-[8px] border-[3px] border-primary-DARK" />
			<div class="shop_btn">
				<LinkButton shop_icon href="https://antik70.de/shop/de/lampenglaeser">Unsere Lampen im Shop</LinkButton>
			</div>
		</div>
	</div>
</Section>

<style>
	.picture_grid {
		grid-template-columns: minmax(160px, 230px) minmax(160px, 230px);
		grid-template-areas:
			'pic1 pic2'
			'pic3 pic4'
			'shop_btn shop_btn';
	}
	.pic1 {
		grid-area: pic1;
	}
	.pic2 {
		grid-area: pic2;
	}
	.pic3 {
		grid-area: pic3;
	}
	.pic4 {
		grid-area: pic4;
	}
	.shop_btn {
		gap: 0;
		margin: -32px auto 0 auto;
		grid-area: shop_btn;
	}
</style>
