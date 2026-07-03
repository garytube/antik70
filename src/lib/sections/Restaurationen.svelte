<script lang="ts">
	import { SITE } from '$const';
	import pic from '$assets/2024/IMG_5833.webp';
	import antik4 from '$assets/antik_moebel/antik_moebel_4.jpg';
	import antik6 from '$assets/antik_moebel/antik_moebel_6.jpg';

	interface Props {
		id?: string;
	}

	let { id = '' }: Props = $props();
</script>

<section {id} class="bg-beige-light py-20 xl:py-28">
	<div class="container mx-auto">

		<!-- Intro -->
		<div class="grid md:grid-cols-2 gap-12 xl:gap-20 items-start mb-16">
			<div>
				<p class="font-sans text-xs font-bold tracking-widest2 uppercase text-amber mb-4">
					Unsere Arbeit
				</p>
				<h2 class="font-serif text-4xl xl:text-5xl text-primary leading-tight text-balance mb-6">
					{SITE.DE.RESTORE_HEADLINE}
				</h2>
				<p class="font-sans text-base xl:text-lg text-stone leading-relaxed text-pretty">
					{SITE.DE.RESTORE_TEXT}
				</p>
			</div>
			<div class="grid grid-cols-2 gap-4">
				<img src={pic} alt="Restaurierung" class="rounded-2xl w-full h-48 md:h-56 object-cover shadow-md" />
				<img src={antik4} alt="Restauriertes Möbelstück" class="rounded-2xl w-full h-48 md:h-56 object-cover shadow-md mt-8" />
				<img src={antik6} alt="Restauriertes Möbelstück" class="rounded-2xl w-full h-48 md:h-56 object-cover shadow-md -mt-8 col-span-2 hidden md:block" style="max-height:180px; object-position: center 30%;" />
			</div>
		</div>

		<hr class="divider mb-16" />

		<!-- Feature grid -->
		<div class="grid md:grid-cols-2 gap-x-16 gap-y-10">
			{#each SITE.DE.RESTORE_FEATURES as feature, i (feature.title)}
				<div class="flex gap-5">
					<div class="shrink-0 w-8 h-8 rounded-full bg-amber flex items-center justify-center mt-1">
						<span class="font-serif text-primary text-sm font-bold">{i + 1}</span>
					</div>
					<div>
						<h3 class="font-serif text-lg text-primary mb-2">{feature.title}</h3>
						<p class="font-sans text-sm text-stone leading-relaxed text-pretty">{feature.text}</p>
					</div>
				</div>
			{/each}
		</div>

		<!-- Contact CTA -->
		<div class="mt-20 rounded-2xl bg-primary p-10 md:p-14">
			<div class="max-w-xl">
				<h3 class="font-serif text-2xl md:text-3xl text-beige-light mb-3 text-balance">
					{SITE.DE.RESTORE_CONTACT_TITLE}
				</h3>
				<p class="font-sans text-beige-dark text-base leading-relaxed mb-8 text-pretty">
					{SITE.DE.RESTORE_CONTACT_TEXT}
				</p>
				<div class="flex flex-wrap gap-4">
					<a
						href="tel:{SITE.TELEPHONE.LANDLINE_HREF}"
						class="inline-flex items-center gap-2 bg-amber text-primary font-sans font-bold text-sm tracking-wide px-6 py-3.5 rounded-full hover:bg-amber-light transition-colors duration-200"
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
							<path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
						</svg>
						{SITE.TELEPHONE.LANDLINE}
					</a>
					<a
						href="mailto:{SITE.EMAIL_HREF}"
						class="inline-flex items-center gap-2 border-2 border-beige-dark text-beige-light font-sans font-semibold text-sm tracking-wide px-6 py-3.5 rounded-full hover:border-amber hover:text-amber transition-colors duration-200"
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
							<path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
							<path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
						</svg>
						{SITE.EMAIL}
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
