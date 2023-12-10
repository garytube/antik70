<script lang="ts">
	import P from './P.svelte';

	export let title: string;
	export let alternate: boolean = false;
</script>

<div class="feature mb-6 lg:mb-10">
	<div class=" buttlet hidden lg:flex w-4 h-4 lg:w-7 lg:h-7 bg-primary rounded-full mt-2" class:alternate>
		<div class="w-3 h-3 lg:w-4 lg:h-4 border-2 lg:border-[3px] border-[#DEAA82] rounded-full mx-auto my-auto"></div>
	</div>
	<div>
		<h4 class="flex items-center lg:block gap-2 text-2xl lg:text-3xl font-serif font-bold mb-2 lg:mb-3">
			<!-- bubble mobile -->
			<div class="flex lg:hidden buttlet w-4 h-4 bg-primary rounded-full">
				<div class="w-3 h-3 border-2 border-[#DEAA82] rounded-full mx-auto my-auto"></div>
			</div>
			<!-- end bubble mobile -->
			{title}
		</h4>
		<P><slot /></P>
	</div>
</div>

<style>
	.alternate {
		background-color: #deaa82;
	}
	.alternate div {
		border-color: rgb(55 41 34);
	}
	.feature {
		display: grid;
		gap: 16px;
		grid-template-columns: 1fr;
	}
	@media (min-width: 1024px) {
		.feature {
			max-width: 860px;
			gap: 0 12px;
			grid-template-columns: 30px 1fr;
		}
	}
</style>
