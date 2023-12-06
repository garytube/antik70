<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	export let pictures;
	export let speed = 3000;

	let index = 0;
	let paused = false;

	let slides = Object.values(pictures);

	$: slide = slides[index];

	onMount(() => {
		const counter = setInterval(() => {
			if (paused) return;
			if (index == slides.length - 1) {
				index = 0;
			} else {
				++index;
			}
		}, speed);
		return () => clearInterval(counter);
	});
</script>

{#if slides}
	<!-- content here -->

	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:focus={() => (paused = true)} on:mouseover={() => (paused = true)} on:mouseleave={() => (paused = false)}>
		<div class="block lg:ml-auto slideshow w-full h-[300px] md:h-[450px] lg:h-[550px] xl:max-w-[480px] relative overflow-hidden" class:paused>
			{#key slide}
				<img transition:fade class="h-full border-[6px] object-contain absolute inset-0 z-50 md:rounded-lg border-primary-DARK" src={slide} alt={index.toString()} />
			{/key}
		</div>
		<div class="flex flex-row space-x-2 mt-4 mx-auto w-max duration-200"></div>
	</div>
{/if}

<style lang="postcss">
	.active {
		background-color: rgba(144, 158, 179, 0.473) !important;
	}
</style>
