<script lang="ts">
	import { classNames } from '$lib';
	import { twJoin } from 'tailwind-merge';

	let { children } = $props();
</script>

<div class={twJoin(classNames.prose, 'mx-auto max-w-3xl')}>
	{@render children?.()}
</div>
