<script lang="ts">
	export let title = '';
	export let description = '';
	export let cta = '';
	export let href = '';
</script>

<div class="rounded-xl bg-redish text-beige drop-shadow-md transition-all duration-500 hover:drop-shadow-xl shadow-primary-DARK p-6">
	<h4 class="font-bold text-xl tracking-wide font-serif">{title}</h4>
	<p class="mb-6">{description}</p>
	<a {href} class="border-2 border-beige rounded-full py-1.5 px-3 text-base" target="_blank" rel="noopener noreferrer">
		{cta}
	</a>
</div>
