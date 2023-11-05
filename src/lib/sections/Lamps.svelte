<script>
	import H2 from '$lib/components/H2.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
</script>

<section id="home" class="xl:pt-12 my-32 bg-beige bg-gradient-to-b from-[#733d2422] to-20% to-transparent">
	<div class="container mx-auto py-16">
		<H2 class="text-center">Vielfalt, Eleganz und Einzigartigkeit:<br />Unsere Lampenwelt</H2>
		<p class="text-center leading-relaxed text-2xl max-w-5xl mx-auto">
			Entdecken Sie bei uns ein umfangreiches Sortiment an Lampen, das keine Wünsche offen lässt. Von der zeitlosen Eleganz unserer
			Tiffany-Lampen bis hin zu unseren höhenverstellbaren Zug- und Pendelleuchten, Plafonieren, Wandlampen und edlen Tisch- und
			Stehleuchten aus Messing. Jede Lampe durchläuft eine Aufarbeitung, wird neu elektrifiziert und erfüllt höchste<br /><span
				>Sicherheitsstandards</span
			>.
		</p>
		<LinkButton href="#">
			Unsere Lampen
			<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 ml-1" viewBox="0 0 16.692 22.499">
				<path
					id="Path_11"
					data-name="Path 11"
					d="M12,18V12.75m0,0a6.01,6.01,0,0,0,1.5-.189M12,12.75a6.01,6.01,0,0,1-1.5-.189m3.75,7.478a12.06,12.06,0,0,1-4.5,0m3.75,2.383a14.406,14.406,0,0,1-3,0M14.25,18v-.192a2.782,2.782,0,0,1,1.508-2.316,7.5,7.5,0,1,0-7.517,0A2.783,2.783,0,0,1,9.75,17.808V18"
					transform="translate(-3.653 -0.752)"
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
				/>
			</svg>
		</LinkButton>

		<!-- lampen grid -->
		<div class="grid mt-16 grid-cols-2 lg:grid-cols-3 gap-8">
			{#each ['https://images.unsplash.com/photo-1544691560-fc2053d97726?auto=format&fit=crop&q=80&w=3870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1600620195943-eb20d00a556f?auto=format&fit=crop&q=80&w=3024&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1577176434922-803273eba97a?auto=format&fit=crop&q=80&w=3870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] as image}
				<div class="w-full h-[336px] border-4 border-primary-DARK rounded-xl overflow-hidden">
					<img class="w-full h-full object-cover" src={image} alt="DEMO" />
				</div>
			{/each}
		</div>
	</div>
</section>
