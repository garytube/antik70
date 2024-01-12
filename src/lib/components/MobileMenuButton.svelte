<script>
	export let open = false;
</script>

<div id="mobile_nav_button" class={$$props.class}>
	<button
		on:click
		type="button"
		class="relative inline-flex items-center justify-center rounded-md border-2 p-1 text-gray-400 hover:bg-gray-700 hover:text-highlight focus:outline-none"
		aria-controls="mobile-menu"
		aria-expanded="false"
	>
		<span class="absolute -inset-0.5" />
		<span class="sr-only">
			{#if open}
				Open main menu
			{:else}
				Close main menu
			{/if}
		</span>
		{#if !open}
			<svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
			</svg>
		{:else}
			<svg class=" h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		{/if}
	</button>
</div>
