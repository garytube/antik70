<script lang="ts">
	import { SITE } from '$const';

	// Link URL
	export let href: string = SITE.SHOP_LINK;
	export let alternate: boolean = false;
	export let shop_icon = false;
</script>

<a
	{href}
	title={$$props.slot}
	class="text-xl mt-8 shadow-lg text-white px-4 py-2 flex flex-row items-center max-w-max btn rounded-xl hover:opacity-80"
	class:bg-redish={alternate}
	class:bg-primary={!alternate}
>
	{#if shop_icon}
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current mr-2 h-6">
			<path
				fill-rule="evenodd"
				d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
				clip-rule="evenodd"
			/>
		</svg>
	{/if}
	<slot>
		{SITE.DE.HERO_CTA}
	</slot>
</a>
