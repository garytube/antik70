<script lang="ts">
	import H1 from '$lib/components/H1.svelte';
	import H3 from '$lib/components/H3.svelte';
	import Slideshow from '$lib/components/Slideshow.svelte';
</script>

<section id="home" class="container mx-auto xl:pt-12">
	<div class="grid items-center grid-cols-2">
		<!-- hero text -->
		<div>
			<H1>Zeitlose Eleganz durch Antiquitäten, Einzigartige Lampen & Möbelkunst.</H1>
			<H3>
				Jedes Möbelstück erzählt eine Geschichte vergangener Epochen, mit Liebe restauriert und bereit, Ihr Zuhause mit zeitloser Eleganz zu
				schmücken. Tauchen Sie ein in unsere Welt, in der Geschichte und Stil sich vereinen.
			</H3>
			<a
				href="#foo"
				class="text-xl mt-8 shadow-lg px-4 flex flex-row items-center max-w-max btn h-14 rounded-2xl bg-primary text-white hover:bg-highlight hover:text-primary"
				>Entdecken Sie unsere Raritäten
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current ml-4 h-8">
					<path
						fill-rule="evenodd"
						d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
						clip-rule="evenodd"
					/>
				</svg>
			</a>
		</div>

		<!-- hero image -->
		<div>
			<Slideshow />
		</div>
	</div>
</section>
