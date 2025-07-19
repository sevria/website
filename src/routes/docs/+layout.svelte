<script lang="ts">
	let { children } = $props();
</script>

<div class="prose mx-auto max-w-3xl py-12">
	{@render children?.()}
</div>
