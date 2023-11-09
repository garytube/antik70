<script lang="ts">
	export let id = '';
	export let container = true;
	export let circle = false;
</script>

<section {id} class="relative py-16 xl:py-24 mb-32 bg-beige bg-gradient-to-b from-[#733d2422] to-20% to-transparent">
	<div class="z-10 relative" class:container class:mx-auto={container}>
		<slot>CONTENT</slot>
	</div>
	{#if circle}
		<div class="circle z-0"></div>
	{/if}
</section>

<style>
	.circle {
		--size: 820px;
		display: block;
		position: absolute;
		background-color: white;
		width: var(--size);
		height: var(--size);
		top: 20px;
		left: calc((-1 * var(--size)) / 1.5);
		opacity: 0.4;
		border-radius: 50%;
	}

	@media (min-width: 1280px) {
		.circle {
			left: calc((-1 * var(--size)) / 1.6);
		}
	}
</style>
