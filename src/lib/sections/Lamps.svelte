<script lang="ts">
	import H2 from '$lib/components/H2.svelte';
	import P from '$lib/components/P.svelte';
	import Section from '$lib/components/Section.svelte';
	import Feature from '$lib/components/Feature.svelte';
	import Lamp from '$assets/lamp.jpg';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import { SITE } from '$const';
	import ShopButton from '$lib/components/ShopButton.svelte';
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
				Hier finden Sie einige ausgewählte alte Lampen und Lampengestelle; neu elektrifiziert, repariert und gereinigt sowie teilweise mit Ergänzungsgläsern versehen. Verwenden wir
				neue Glasschirme wird diese Tatsache ausdrücklich erwähnt. Weitere Einzelstücke können Sie in unseren Ausstellungsräumen betrachten
			</Feature>

			<Feature alternate title="Reparaturen nach VDE Vorschriften">
				Jede alte Lampe durchläuft eine Aufarbeitung, wird neu elektrifiziert und erfüllt höchste Sicherheitsstandards.
			</Feature>

			<Feature title="Glasschirm, Ersatzglas, Lampenglas">
				Eines der bestimmenden Kriterien im Bereich Beleuchtung. Klassische Formen, diverse Farben, spezielle Oberflächen und verschiedene Größen der einzelnen Modelle ergeben eine
				ungeahnte Vielfalt zur Bestückung Ihrer Lampengestelle.
			</Feature>
		</div>
		<div id="keyfacts_pictures" class=" hidden lg:grid picture_grid gap-8 md:ml-28">
			<img src={Lamp} alt="antik70.de" class="pic1 rounded-[8px] border-[3px] border-primary-DARK" />
			<img src={Lamp} alt="antik70.de" class="pic2 rounded-[8px] border-[3px] border-primary-DARK" />
			<img src={Lamp} alt="antik70.de" class="pic3 rounded-[8px] border-[3px] border-primary-DARK" />
			<img src={Lamp} alt="antik70.de" class="pic4 rounded-[8px] border-[3px] border-primary-DARK" />
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
