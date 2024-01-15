<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	export let pictures: Array<string> = [];
	export let speed = 3000;

	let index = 0;
	let paused = false;

	let slides = Object.values(pictures);

	$: slide = slides[index];

	function setSlide(i: any) {
		if (i == index) return;
		index = i;
	}

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
	<div
		on:focus={() => (paused = true)}
		on:mouseover={() => (paused = true)}
		on:mouseleave={() => (paused = false)}
		class="flex flex-col lg:ml-auto slideshow w-full xl:max-w-[480px]"
		class:paused
	>
		{#key slide}
			<img class="max-h-[470px] border-[6px] object-cover md:rounded-lg border-primary-DARK" src={slide} alt={index.toString()} />
		{/key}
		<div class="flex flex-row space-x-2 mt-4 mx-auto duration-200 xl:max-w-[480px]">
			{#each slides as item, i (item)}
				<button on:click={() => setSlide(i)} class="flex buttlet w-4 h-4 bg-primary rounded-full">
					{#if i === index}
						<div transition:fade class="w-3 h-3 border-2 border-[#DEAA82] rounded-full mx-auto my-auto"></div>
					{/if}
				</button>
			{/each}
		</div>
	</div>
{/if}
