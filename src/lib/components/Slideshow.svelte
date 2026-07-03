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
		if (i === index) return;
		index = i;
	}

	onMount(() => {
		const counter = setInterval(() => {
			if (paused) return;
			index = index === slides.length - 1 ? 0 : index + 1;
		}, speed);
		return () => clearInterval(counter);
	});
</script>

{#if slides.length}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		onfocus={() => (paused = true)}
		onmouseover={() => (paused = true)}
		onmouseleave={() => (paused = false)}
		class="relative w-full"
	>
		<!-- Main image -->
		<div class="relative overflow-hidden rounded-2xl aspect-[4/3] bg-beige-dark shadow-xl">
			{#key slide}
				<img
					transition:fade={{ duration: 600 }}
					src={slide}
					alt="Antik70 Fundstück"
					class="absolute inset-0 w-full h-full object-cover"
				/>
			{/key}
			<!-- Overlay label -->
			<div class="absolute bottom-4 left-4">
				<span class="tag tag-available">Antik70 Original</span>
			</div>
		</div>

		<!-- Dot indicators -->
		<div class="flex gap-2 mt-4 justify-center">
			{#each slides as _item, i (_item)}
				<button
					onclick={() => setSlide(i)}
					aria-label="Bild {i + 1}"
					class="w-2 h-2 rounded-full transition-all duration-300 {i === index ? 'bg-primary w-6' : 'bg-amber-light'}"
				></button>
			{/each}
		</div>
	</div>
{/if}
