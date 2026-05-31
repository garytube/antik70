<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	interface Props {
		pictures?: Array<string>;
		speed?: number;
	}

	let { pictures = [], speed = 3000 }: Props = $props();

	let index = $state(0);
	let paused = $state(false);

	let slides = $derived(Object.values(pictures));

	let slide = $derived(slides[index]);

	function setSlide(i: number) {
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

	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		onfocus={() => (paused = true)}
		onmouseover={() => (paused = true)}
		onmouseleave={() => (paused = false)}
		class="flex flex-col lg:ml-auto slideshow w-full xl:max-w-[480px]"
		class:paused
	>
		{#key slide}
			<img class="max-h-[340px] md:max-h-[470px] border-[6px] object-cover md:rounded-lg border-primary-DARK" src={slide} alt={index.toString()} />
		{/key}
		<div class="flex flex-row space-x-2 mt-4 mx-auto duration-200 xl:max-w-[480px]">
			{#each slides as item, i (item)}
				<button onclick={() => setSlide(i)} class="flex buttlet w-4 h-4 bg-primary rounded-full">
					{#if i === index}
						<div transition:fade class="w-3 h-3 border-2 border-[#DEAA82] rounded-full mx-auto my-auto"></div>
					{/if}
				</button>
			{/each}
		</div>
	</div>
{/if}
