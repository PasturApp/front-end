<script>
	import { page } from '$app/stores';
	import './index.css';
	import Navbar from './components/navbar.svelte';
	import Hamburger from './components/hamburger.svelte';

	// export let data; // <--
	let authenticated = true;
</script>

{#if $page.url.pathname === '/landing'}
	<slot />
{:else}
	<div class:user-in={authenticated}>
		{#if authenticated}
			<Navbar />
			<Hamburger />
		{/if}
		<main class="main">
			<slot />
		</main>
	</div>
{/if}

<svelte:head>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap"
		rel="stylesheet"
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap" rel="stylesheet" />
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
</svelte:head>

<style lang="css">
	.user-in {
		@apply flex flex-row;
	}

	.main {
		@apply min-h-screen w-full p-2 grid place-items-center;
	}

	:global(.navbar):hover .main {
		width: 60%;
	}

	:global(.navbar):hover {
		width: 40% !important;
	}

	:global(body) {
		@apply m-0 p-0;
		background-color: var(--blanco_fondo);
	}
</style>
