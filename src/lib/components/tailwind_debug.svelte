<script>
	import { dev } from '$app/environment';
	import { onMount } from 'svelte';
	let innerWidth = 0;
	let innerHeight = 0;

	const hide = (e) => (e.target.style.display = 'none');
</script>

<svelte:window bind:innerWidth bind:innerHeight />

{#if dev}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div on:click={hide} class="fixed bg-black px-2 py-1 text-sm text-white top-0 left-0 rounded-e cursor-pointer z-50">
		Width: {innerWidth}px | Height: {innerHeight}px | Breakpoint:
		{#if innerWidth >= 1536}
			2xl
		{:else if innerWidth >= 1280}
			xl
		{:else if innerWidth >= 1024}
			lg
		{:else if innerWidth >= 768}
			md
		{:else if innerWidth >= 640}
			sm
		{:else}
			xs
		{/if}
	</div>
{/if}
