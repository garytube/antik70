<script>
	import Footer from '$section/Footer.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import '../app.postcss';
	import '@fontsource/source-sans-pro';
	import '@fontsource/playfair-display';
	import TailwindDebug from '$lib/components/tailwind_debug.svelte';
</script>

<TailwindDebug></TailwindDebug>
<div class=" w-full z-50 bg-redish-LIGHT text-white font-medium px-2 py-2.5">
	<div class="text-center mx-auto text-sm sm:text-base leading-relaxed">
		<span class="font-semibold">Betriebsferien:</span>
		<br />
		Antik70 macht vom <span class="font-bold text-yellow-200">14.07.2025</span> bis <span class="font-bold text-yellow-200">02.08.2025</span> Urlaub.<br />
		Das Ladengeschäft bleibt geschlossen.<br />
		<span class="italic">Shop-Bestellungen werden 2× wöchentlich bearbeitet.</span><br />
		Ab dem <span class="font-bold text-yellow-200">04.08.2025</span> sind wir wieder für Sie da!
	</div>
</div>
<header class="px-6 lg:container relative flex my-8 lg:mt-16 lg:mb-8">
	<Logo />
	<Navigation />
</header>

<slot />

<Footer />

<style lang="postcss">
	:global(html) {
		overflow-x: hidden;
		@apply bg-beige;
		background-image: url("data:image/svg+xml,%3Csvg width='80' height='88' viewBox='0 0 80 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 21.91V26h-2c-9.94 0-18 8.06-18 18 0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73 3.212-6.99 9.983-12.008 18-12.73V62h2c9.94 0 18-8.06 18-18 0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73-3.212 6.99-9.983 12.008-18 12.73zM54 58v4.696c-5.574 1.316-10.455 4.428-14 8.69-3.545-4.262-8.426-7.374-14-8.69V58h-5.993C12.27 58 6 51.734 6 44c0-7.732 6.275-14 14.007-14H26v-4.696c5.574-1.316 10.455-4.428 14-8.69 3.545 4.262 8.426 7.374 14 8.69V30h5.993C67.73 30 74 36.266 74 44c0 7.732-6.275 14-14.007 14H54zM42 88c0-9.94 8.06-18 18-18h2v-4.09c8.016-.722 14.787-5.738 18-12.73v7.434c-3.545 4.262-8.426 7.374-14 8.69V74h-5.993C52.275 74 46 80.268 46 88h-4zm-4 0c0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73v7.434c3.545 4.262 8.426 7.374 14 8.69V74h5.993C27.73 74 34 80.266 34 88h4zm4-88c0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73v-7.434c-3.545-4.262-8.426-7.374-14-8.69V14h-5.993C52.27 14 46 7.734 46 0h-4zM0 34.82c3.213-6.992 9.984-12.008 18-12.73V18h2c9.94 0 18-8.06 18-18h-4c0 7.732-6.275 14-14.007 14H14v4.696c-5.574 1.316-10.455 4.428-14 8.69v7.433z' fill='%23edd9ca' fill-opacity='0.25' fill-rule='evenodd'/%3E%3C/svg%3E");

		@media screen and (max-width: 768px) {
			background-size: 50px;
		}
	}

	:global(body) {
		@apply text-primary;
	}
</style>
