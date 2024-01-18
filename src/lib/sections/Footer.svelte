<script lang="ts">
	import { SITE } from '$const';
	import OpenHoures from '$lib/components/OpenHoures.svelte';
</script>

<footer class="py-4 md:py-14 text-xs bg-primary border-2 border-highlight text-white md:text-base">
	<div class="container grid grid-cols-2 md:grid-cols-5 xl:grid-cols-footer">
		{#each Object.entries(SITE.DE.FOOTER_LINKS) as [categorie, links]}
			<div class="">
				<h4 class="text-xs md:text-lg font-bold mt-3 mb-1 md:mb-4">{categorie}</h4>
				<ul>
					{#each links as link}
						<li class="text-xs md:text-base md:mb-2 last:mb-0 hover:text-highlight">
							<a target="_blank" href={link.href}>{link.name}</a>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
		<div id="open" class="self-start col-span-2 md:col-span-1 columns-3 md:columns-7xl md:row-auto row-start-1 lg:justify-self-end my-4 lg:text-right">
			<OpenHoures />
		</div>
	</div>
</footer>
