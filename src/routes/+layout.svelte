<script>
	import './index.css';
	import Navbar from './components/navbar.svelte';
	import Hamburger from './components/hamburger.svelte';
	import { page } from '$app/stores';
	// export let data; // <--
	let authenticated = true;
</script>

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

{#if ['/landing', '/registro', '/rol', '/inicio_sesion'].includes($page.url.pathname)}
	<slot />
{:else if ['/registro', '/rol', '/inicio_sesion'].includes($page.url.pathname)}
	<main class="main">
		<slot />
	</main>
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

<style lang="css">
	.user-in {
		@apply flex flex-row;
	}

	.main {
		@apply min-h-screen w-full md:ml-20 p-2 grid place-items-center;
	}

	:global(.nav_bar):hover .main {
		width: 60%;
	}

	:global(.nav_bar):hover {
		width: 40% !important;
	}

	:global(body) {
		@apply m-0 p-0;
		background-color: var(--blanco_fondo);
	}
</style>
