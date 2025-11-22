<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
  import '../app.css'

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="container">
	<nav>
		<a href="/">Home</a>
		<a href="/Villages">Villages</a>
    <a href="/Trade-Routes">Trade Routes</a>
		<a href="/about">About</a>
	</nav>
	{@render children?.()}
</div>

<style>
	div.container {
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
    /*background: #79747E;*/
	}
	
	nav {
		min-height: 60px;
	}
</style>
