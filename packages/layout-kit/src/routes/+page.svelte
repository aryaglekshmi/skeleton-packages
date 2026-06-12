<script lang="ts">
	import Header1 from '$lib/header/Header-1.svelte';
	import Header2 from '$lib/header/Header-2.svelte';
	import Header3 from '$lib/header/Header-3.svelte';
	import Header4 from '$lib/header/Header-4.svelte';
	import type { NavItem } from '$lib/header/types.js';

	const items: NavItem[] = [
		{ label: 'Home', href: '/' },
		{
			label: 'Products',
			children: [
				{ label: 'UI Kit', href: '/ui-kit' },
				{
					label: 'Layout Kit',
					children: [
						{ label: 'Header', href: '/header' },
						{ label: 'Sidebar', href: '/sidebar' },
					],
				},
				{ label: 'Theme', href: '/theme', badge: 'New' },
			],
		},
		{
			label: 'Docs',
			children: [
				{ label: 'Getting Started', href: '/docs/start' },
				{ label: 'Components', href: '/docs/components' },
			],
		},
		{ label: 'Pricing', href: '/pricing' },
	];

	const headers = [
		{ id: 1, label: 'Header-1 — brand left · nav left · actions right' },
		{ id: 2, label: 'Header-2 — brand left · nav centered · actions right' },
		{ id: 3, label: 'Header-3 — stacked: brand+actions / nav row' },
		{ id: 4, label: 'Header-4 — minimal: brand · tagline · actions' },
	];

	let active = $state(1);
</script>

{#if active === 1}
	<Header1 brand="Skeleton" {items}>
		{#snippet actions()}
			<button class="btn-ghost btn-sm">Sign in</button>
			<button class="btn-primary btn-sm">Get started</button>
		{/snippet}
	</Header1>
{:else if active === 2}
	<Header2 brand="Skeleton" {items}>
		{#snippet actions()}
			<button class="btn-ghost btn-sm">Sign in</button>
			<button class="btn-primary btn-sm">Get started</button>
		{/snippet}
	</Header2>
{:else if active === 3}
	<Header3 brand="Skeleton" {items}>
		{#snippet actions()}
			<button class="btn-ghost btn-sm">Sign in</button>
			<button class="btn-primary btn-sm">Get started</button>
		{/snippet}
	</Header3>
{:else if active === 4}
	<Header4 brand="Skeleton" tagline="Build beautiful UIs faster.">
		{#snippet actions()}
			<button class="btn-ghost btn-sm">Sign in</button>
			<button class="btn-primary btn-sm">Get started</button>
		{/snippet}
	</Header4>
{/if}

<main class="mx-auto max-w-7xl px-4 py-10 flex flex-col gap-4">
	<h2>Header variants</h2>
	<div class="flex flex-col gap-2">
		{#each headers as h}
			<button
				class="btn-sm text-left {active === h.id ? 'btn-primary' : 'btn-secondary'}"
				onclick={() => (active = h.id)}
			>
				{h.label}
			</button>
		{/each}
	</div>
</main>
