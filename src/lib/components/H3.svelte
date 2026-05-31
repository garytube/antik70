<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let { ...props }: Props = $props();
</script>

<h3 class="text-xl lg:text-xl lg:leading-right font-sans {props.class}">{@render props.children?.()}</h3>
