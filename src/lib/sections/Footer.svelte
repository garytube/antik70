<script lang="ts">
	import { SITE } from '$const';
	import OpenHoures from '$lib/components/OpenHoures.svelte';
</script>

<footer class="py-14 bg-primary border-2 border-highlight text-white text-base">
	<div class="container grid grid-cols-footer">
		{#each Object.entries(SITE.DE.FOOTER_LINKS) as [categorie, links]}
			<div>
				<h4 class="text-lg font-bold mb-4">{categorie}</h4>
				<ul>
					{#each links as link}
						<li class="mb-2 last:mb-0 hover:text-highlight">
							<a target="_blank" href={link.href}>{link.name}</a>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
		<div id="open" class="self-start justify-self-end text-right">
			<OpenHoures />
		</div>
	</div>
</footer>
