<script lang="ts">
	// Link URL
	export let href: string;
</script>

<a
	{href}
	title={$$props.slot}
	class="text-xl mx-auto mt-8 shadow-lg px-4 flex flex-row items-center max-w-max btn h-10 rounded-xl bg-primary text-white hover:bg-highlight hover:text-primary"
>
	<slot />
</a>
