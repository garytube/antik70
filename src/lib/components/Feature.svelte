<script lang="ts">
	export let title: string;
	export let reverse: boolean = false;
</script>

<div class="feature mb-12">
	<div class="buttlet flex w-9 h-9 bg-primary rounded-full mt-1.5" class:reverse>
		<div class="w-5 h-5 border-[3px] border-[#DEAA82] rounded-full mx-auto my-auto"></div>
	</div>
	<div>
		<h4 class="text-4xl font-serif font-bold mb-4">{title}</h4>
		<p class="text-xl"><slot /></p>
	</div>
</div>

<style>
	.reverse {
		background-color: #deaa82;
	}
	.reverse div {
		border-color: rgb(55 41 34);
	}
	.feature {
		display: grid;
		max-width: 860px;
		gap: 0 25px;
		grid-template-columns: 36px 1fr;
	}
</style>
