<script lang="ts">
	import { Button, Link } from '$lib';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
		rel="stylesheet"
	/>
	<title>Sevria - Open source headless CMS built with Rust and Svelte</title>
</svelte:head>

<div class="border-border border-b">
	<div class="mx-auto flex h-16 w-full max-w-7xl items-center px-5">
		<p class="text-foreground mr-auto">
			<Link href="/" class="inline-flex items-center gap-0.5">
				<img alt="Logo" src="/logo.svg" class="size-8" />
				<span class="text-[1.375rem] font-semibold">Sevria</span>
			</Link>
		</p>

		<nav class="mr-8 hidden gap-7 text-base lg:flex">
			<Link href="/">Features</Link>
			<Link href="/">Use cases</Link>
			<Link href="/">Docs</Link>
			<Link href="/">About</Link>
			<Link href="/">Source code</Link>
		</nav>

		<Button href="/docs/getting-started">Get started</Button>
	</div>
</div>

{@render children()}
