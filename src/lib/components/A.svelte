<script lang="ts">
	export let href: string;
	export let title = 'Antik70 Online Shop';
</script>

<a
	{href}
	class="relative text-current font-medium inline-flex items-center font-semibold text-redish hover:opacity-80 hover:font-bold"
	target="_blank"
	rel="noopener noreferrer"
	{title}
>
	<slot />
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 stroke-redish">
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
		/>
		<path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
	</svg>
	<div class="absolute h-[1px] bottom-1 rounded-xl bg-redish w-full"></div>
</a>
