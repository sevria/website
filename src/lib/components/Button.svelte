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
		size = 'lg',
		variant = 'primary',
		...rest
	}: Props = $props();

	let _class = twMerge(
		classNames.focusable,
		'flex items-center',
		'font-bold cursor-pointer rounded-md transition-colors',
		size === 'md' && 'h-10.5 px-4.5',
		size === 'lg' && 'h-12 px-5.5',
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
