<script lang="ts">
	import { classNames } from '$lib/utils';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type Props = HTMLAnchorAttributes;

	let { children, class: className, href, ...rest }: Props = $props();
</script>

<a {href} class={twMerge('rounded-sm', classNames.focusable, className?.toString())} {...rest}>
	{@render children?.()}
</a>
