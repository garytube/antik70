<script lang="ts">
	interface Props {
		id?: string;
		container?: boolean;
		circle?: boolean;
		children?: import('svelte').Snippet;
	}

	let { id = '', container = true, circle = false, children }: Props = $props();
</script>

<section
	{id}
	class="relative bg-beige bg-gradient-to-b from-[#733d2422] to-transparent to-20% py-16 xl:py-24"
>
	<div class="relative z-10" class:container class:mx-auto={container}>
		{#if children}{@render children()}{:else}CONTENT{/if}
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
