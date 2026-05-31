<script>
	import { SITE } from '$const';
	let { solid = false, children } = $props();
</script>

<a
	href={SITE.SHOP_LINK}
	type="button"
	target="_blank"
	rel="external noopener noreferrer"
	class:bg-primary={solid}
	class:bg-transparent={!solid}
	class:text-white={solid}
	class:text-primary={!solid}
	class="rounded-text hover:bg-primary inline-flex items-center gap-x-1 border-2 px-2 py-1 text-sm text-[16px] font-bold whitespace-nowrap transition-colors duration-200 ease-in-out hover:border-transparent hover:text-white focus-visible:outline md:gap-x-2 md:text-base xl:px-3 xl:py-1"
>
	{@render children()}
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
		<path
			fill-rule="evenodd"
			d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
			clip-rule="evenodd"
		/>
	</svg>
</a>
