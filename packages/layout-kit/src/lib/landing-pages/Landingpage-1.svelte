<script lang="ts">
	import type { Snippet } from "svelte";

	let {
		title = 'Greeny',
		logo = 'https://image.flaticon.com/icons/svg/497/497348.svg',
		heading = 'Find your greeny stuff for your room',
		highlight = 'greeny',
		description = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Recusandae maiores neque eaque ea odit placeat, tenetur illum
      distinctio nulla voluptatum a corrupti beatae tempora aperiam
      quia id aliquam possimus aut.`,
		ctaText = 'Learn More',
		image = 'https://images.unsplash.com/photo-1536147116438-62679a5e01f2?auto=format&fit=crop&w=634&q=80',
		imageAlt = 'Product showcase',
		onCta,
		lSnippet,
		value = $bindable('Wooooooooooeeeeee')
	}: {
		title?: string;
		logo?: string;
		heading?: string;
		highlight?: string;
		description?: string;
		ctaText?: string;
		image?: string;
		imageAlt?: string;
		onCta?: (msg:string) => void;
		lSnippet?: Snippet;
		value?: string
	} = $props();

	const parts = $derived(highlight && heading.includes(highlight)
		? heading.split(highlight)
		: [heading, '']);

		export function callFromOutside(ms:any) {
			alert("Hello from outside the component!");
			console.log("Received message:", ms);
		}
</script>

<div class="flex flex-wrap">
	<!-- LEFT SIDE -->
	<div class="w-full sm:w-8/12 mb-10">
		<div class="container mx-auto h-full sm:p-10">
			<!-- NAV -->
			<nav class="flex px-4 justify-between items-center">
				<div class="text-4xl font-bold">
					{title}<span class="text-accent/70">.</span>
				</div>
				<div>
					<img src={logo} alt="{title} logo" class="w-8" />
				</div>
			</nav>

			<!-- HERO -->
			<header class="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
				<div class="w-full">
					<h1 class="text-4xl lg:text-6xl font-bold">
						{#if parts[1] !== ''}
							{parts[0]}<span class="text-accent/85">{highlight}  <span class="text-amber-800">{value}</span></span>{parts[1]}
						{:else}
							{heading}
						{/if}
					</h1>

					<div class="w-20 h-2 bg-accent/70 my-4"></div>

					<p class="text-xl mb-10">{description}</p>

					{#if lSnippet}
						{@render lSnippet()}
					{/if}

					<button type="button" class="btn btn-primary" onclick={()=>onCta?.("Hello from Landingpage-1!")}>
						{ctaText}
					</button>
				</div>
			</header>
		</div>
	</div>

	<!-- RIGHT SIDE IMAGE -->
	<img src={image} alt={imageAlt} class="w-full h-48 object-cover sm:h-screen sm:w-4/12" />
</div>
