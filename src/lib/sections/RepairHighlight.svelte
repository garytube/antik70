<script lang="ts">
	import antik1 from '$assets/antik_moebel/antik_moebel_1.jpg';
	import antik3 from '$assets/antik_moebel/antik_moebel_3.jpg';
	import antik5 from '$assets/antik_moebel/antik_moebel_5.jpg';
	import antik7 from '$assets/antik_moebel/antik_moebel_7.jpg';
</script>

<!-- Full-width editorial image strip -->
<div class="bg-primary overflow-hidden">
	<div class="flex h-48 md:h-64 lg:h-80">
		<div class="flex-1 overflow-hidden">
			<img src={antik1} alt="Restauriertes Möbelstück" class="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
		</div>
		<div class="flex-1 overflow-hidden">
			<img src={antik3} alt="Restauriertes Möbelstück" class="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
		</div>
		<div class="flex-1 overflow-hidden hidden md:block">
			<img src={antik5} alt="Restauriertes Möbelstück" class="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
		</div>
		<div class="flex-1 overflow-hidden hidden lg:block">
			<img src={antik7} alt="Restauriertes Möbelstück" class="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
		</div>
	</div>
</div>
