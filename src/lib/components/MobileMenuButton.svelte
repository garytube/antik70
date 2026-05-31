<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props {
		open?: boolean;
		class?: string;
		onclick?: HTMLButtonAttributes['onclick'];
	}

	let { open = false, class: className, onclick }: Props = $props();
</script>

<div id="mobile_nav_button" class={className}>
	<button
		{onclick}
		type="button"
		class="relative inline-flex items-center justify-center rounded-md border-2 p-1 text-gray-400 hover:bg-gray-700 hover:text-highlight focus:outline-none"
		aria-controls="mobile-menu"
		aria-expanded={open}
	>
		<span class="absolute -inset-0.5"></span>
		<span class="sr-only">
			{#if open}
				Close main menu
			{:else}
				Open main menu
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
