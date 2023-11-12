<script lang="ts">
	export let title = '';
	export let description = '';
	export let cta = '';
	export let href = '';
</script>

<div class="rounded-[49px] block bg-primary text-highlight mb-8 py-8 px-8">
	<h4 class="font-bold text-4xl mb-4 font-serif">{title}</h4>
	<p class="mb-6 text-xl">{description}</p>
	<a {href} class="border-2 border-highlight rounded-full py-2 px-4 text-base" target="_blank" rel="noopener noreferrer">{cta}</a>
</div>
