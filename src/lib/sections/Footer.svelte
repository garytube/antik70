<script lang="ts">
	import { SITE } from '$const';
</script>

<footer class="py-14 bg-primary border-2 border-highlight text-white text-base">
	<div class="container grid grid-cols-footer">
		{#each Object.entries(SITE.DE.FOOTER_LINKS) as [categorie, links]}
			<div>
				<h4 class="text-lg font-bold mb-4">{categorie}</h4>
				<ul>
					{#each links as link}
						<li class="mb-2 last:mb-0 hover:text-highlight"><a href={link.href}>{link.name}</a></li>
					{/each}
				</ul>
			</div>
		{/each}
		<div id="open" class="self-start justify-self-end text-right">
			<h4 class="text-lg font-bold mb-4">{SITE.DE.OPEN_HOURS}</h4>
			<p class="mb-2">
				<span class="font-bold block">{SITE.DE.OPEN_HOURS_1}</span>
				{SITE.DE.OPEN_HOURS_2}
			</p>
			<p>
				<span class="font-bold block">{SITE.DE.OPEN_HOURS_3}</span>
				{SITE.DE.OPEN_HOURS_4}
			</p>
		</div>
	</div>
</footer>
