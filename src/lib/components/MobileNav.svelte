<script>
	export let mobileNavVisable = false;
</script>

<div
	id="mobileMenu"
	class="flex flex-col justify-start fixed w-screen lg:hidden h-screen z-20 items-center px-4 top-32 bg-beige bg-opacity-50 backdrop-blur-sm left-0"
	class:hidden={!mobileNavVisable}
>
	<div
		class="block w-full border-t-2 pt-8"
		aria-orientation="vertical"
		aria-labelledby="user-menu-button"
		tabindex="-1"
	>
		<slot>404- No Entries</slot>
		<slot name="info">
			<div class=" text-sm mt-4 grid gap-x-8 grid-cols-2">
				<div class="map">
					<h3 class="font-bold mb-4">Anfahrt</h3>
					<div class="w-full h-24 block rounded-lg bg-highlight"></div>
				</div>
				<div class="text-right">
					<h3 class="font-bold mb-3">Öffnungszeiten</h3>
					<p class="mb-2">
						<span class="block font-bold">Montag bis Freitag</span>
						11.00 Uhr bis 18.00 Uhr
					</p>

					<p class="mb-2">
						<span class="block font-bold">Neu: Samstag</span>
						10.00 Uhr bis 14.00 Uhr
					</p>
				</div>
			</div>
		</slot>
	</div>
</div>
