<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let { ...props }: Props = $props();
</script>

<h2
	class="text-3xl md:text-4xl lg:text-5xl lg:leading-tight font-bold mb-8 lg:mb-10 text-primary font-serif bg-gradient-to-l from-primary to-redish bg-clip-text text-transparent {props.class}"
>
	{@render props.children?.()}
</h2>
