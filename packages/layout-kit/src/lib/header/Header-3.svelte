<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { NavItem } from './types';
	import NavList from './_NavList.svelte';

	let {
		brand = 'Brand',
		brandHref = '/',
		brandIcon,
		items = [],
		actions,
		class: klass = '',
	}: {
		brand?: string;
		brandHref?: string;
		brandIcon?: any;
		items?: NavItem[];
		actions?: Snippet;
		class?: string;
	} = $props();

	let headerEl: HTMLElement;
	let openL1 = $state<number | null>(null);
	let openL2 = $state<number | null>(null);

	function toggleL1(i: number) {
		openL1 = openL1 === i ? null : i;
		openL2 = null;
	}

	function toggleL2(i: number) {
		openL2 = openL2 === i ? null : i;
	}

	function onWindowClick(e: MouseEvent) {
		if (!headerEl?.contains(e.target as Node)) {
			openL1 = null;
			openL2 = null;
		}
	}
</script>

<!-- Header-3: row 1 brand + actions · row 2 nav centered -->

<svelte:window onclick={onWindowClick} />

<header
	bind:this={headerEl}
	class="sticky top-0 z-50 w-full border-b border-border-primary bg-surface-primary {klass}"
>
	<!-- row 1 -->
	<div class="mx-auto flex h-12 max-w-7xl items-center justify-between px-4">
		<a href={brandHref} class="flex shrink-0 items-center gap-2 no-underline opacity-100 hover:opacity-80">
			{#if brandIcon}{@const Icon = brandIcon}<Icon class="size-5 text-accent" />{/if}
			<span class="text-sm font-semibold text-primary">{brand}</span>
		</a>
		{#if actions}
			<div class="flex items-center gap-2">{@render actions()}</div>
		{/if}
	</div>

	<!-- row 2 -->
	<div class="border-t border-border-primary">
		<div class="mx-auto flex h-10 max-w-7xl items-center justify-center px-4">
			<NavList {items} {openL1} {openL2} onToggleL1={toggleL1} onToggleL2={toggleL2} />
		</div>
	</div>
</header>
