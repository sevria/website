<script lang="ts">
	import { Button, Link } from '$lib';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
		rel="stylesheet"
	/>
	<title>Sevria - Open source headless CMS built with Rust and Svelte</title>
</svelte:head>

<div class="border-border border-b">
	<div class="mx-auto flex h-[4.25rem] w-full max-w-7xl items-center px-5">
		<p class="text-foreground mr-auto">
			<Link href="/" class="inline-flex items-center gap-0.5">
				<img alt="Logo" src="/logo.svg" class="size-7" />
				<span class="-mt-0.5 text-2xl font-bold">sevria</span>
			</Link>
		</p>

		<nav class="mr-8 hidden gap-7 text-base font-medium lg:flex">
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
