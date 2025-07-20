<script lang="ts">
	import { classNames } from '$lib';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type Props = HTMLAnchorAttributes &
		HTMLButtonAttributes & {
			size?: 'md' | 'lg';
			variant?: 'primary' | 'secondary';
		};

	let {
		children,
		class: className,
		href,
		size = 'md',
		variant = 'primary',
		...rest
	}: Props = $props();

	let _class = twMerge(
		classNames.focusable,
		'flex items-center',
		'font-semibold cursor-pointer rounded-md transition-colors',
		size === 'md' && 'h-11 px-4 text-base',
		size === 'lg' && 'h-12 px-5 text-base',
		variant === 'primary' && 'bg-background-primary hover:bg-background-primary-active text-white',
		variant === 'secondary' && 'bg-background-muted hover:bg-background-muted-active',
		className?.toString()
	);
</script>

{#if href}
	<a {href} class={_class} {...rest}>
		{@render children?.()}
	</a>
{:else}
	<button class={_class} {...rest}>
		{@render children?.()}
	</button>
{/if}
