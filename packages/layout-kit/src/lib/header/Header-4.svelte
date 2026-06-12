<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		brand = 'Brand',
		brandHref = '/',
		brandIcon,
		tagline = '',
		actions,
		class: klass = '',
	}: {
		brand?: string;
		brandHref?: string;
		brandIcon?: any;
		tagline?: string;
		actions?: Snippet;
		class?: string;
	} = $props();
</script>

<!-- Header-4: minimal — brand left · tagline center · actions right -->

<header class="sticky top-0 z-50 w-full border-b border-border-primary bg-surface-primary {klass}">
	<div class="mx-auto grid h-14 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4">

		<a href={brandHref} class="flex shrink-0 items-center gap-2 no-underline opacity-100 hover:opacity-80">
			{#if brandIcon}{@const Icon = brandIcon}<Icon class="size-5 text-accent" />{/if}
			<span class="text-sm font-semibold text-primary">{brand}</span>
		</a>

		{#if tagline}
			<p class="text-center text-sm text-tertiary">{tagline}</p>
		{:else}
			<span></span>
		{/if}

		<div class="flex items-center gap-2">
			{#if actions}{@render actions()}{/if}
		</div>

	</div>
</header>
