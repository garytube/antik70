<script lang="ts">
	export let title: string;
	export let alternate: boolean = false;
</script>

<div class="feature mb-6 lg:mb-12">
	<div class=" buttlet hidden lg:flex w-4 h-4 lg:w-9 lg:h-9 bg-primary rounded-full mt-1.5" class:alternate>
		<div class="w-3 h-3 lg:w-5 lg:h-5 border-2 lg:border-[3px] border-[#DEAA82] rounded-full mx-auto my-auto"></div>
	</div>
	<div>
		<h4 class="flex items-center lg:block gap-2 text-2xl lg:text-3xl xl:text-4xl font-serif font-bold mb-2 lg:mb-4 xl:mb-5">
			<!-- bubble mobile -->
			<div class="flex lg:hidden buttlet w-4 h-4 bg-primary rounded-full">
				<div class="w-3 h-3 border-2 border-[#DEAA82] rounded-full mx-auto my-auto"></div>
			</div>
			<!-- end bubble mobile -->
			{title}
		</h4>
		<p class="text-lg lg:text-xl xl:text-2xl leading-relaxed"><slot /></p>
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
			gap: 0 24px;
			grid-template-columns: 36px 1fr;
		}
	}
</style>
