<script lang="ts">
	import { SITE } from '$const';
</script>

<footer class="py-14 bg-primary border-2 border-highlight text-white text-base">
	<div class="container grid grid-cols-footer">
		{#each Object.entries(SITE.DE.FOOTER) as [categorie, links]}
			<div>
				<h4 class="text-lg font-bold mb-4">{categorie}</h4>
				<ul>
					{#each links as link (link.href)}
						<li class="mb-1 last:mb-0"><a href={link.href}>{link.name}</a></li>
					{/each}
				</ul>
			</div>
		{/each}
		<div id="open" class="self-start justify-self-end text-right">
			<h4 class="text-lg font-bold mb-4">Öffnungszeiten</h4>
			<p class="mb-2">
				<span class="font-bold block">Montag bis Freitag:</span>
				11.00 Uhr bis 18.00 Uhr
			</p>
			<p>
				<span class="font-bold block">Neu: Samstag</span>
				11.00 Uhr bis 14.00 Uhr
			</p>
		</div>
	</div>
</footer>
