<script lang="ts">
	import { SITE } from '$const';
</script>

<nav class="hidden lg:flex items-center gap-8 xl:gap-10">
	{#each SITE.DE.NAVI_LINKS as { label, href } (label)}
		<a
			{href}
			class="font-sans font-semibold text-primary text-sm xl:text-base tracking-wide hover:text-amber transition-colors duration-200 whitespace-nowrap"
		>
			{label}
		</a>
	{/each}
	<a
		href="/#kontakt"
		class="ml-2 inline-flex items-center bg-primary text-beige-light font-semibold text-sm tracking-wide px-5 py-2.5 rounded-full hover:bg-amber-dark transition-colors duration-200 whitespace-nowrap"
	>
		Anfragen
	</a>
</nav>
