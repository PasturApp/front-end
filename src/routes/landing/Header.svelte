<script>
	import Typed from 'typed.js';
	import { onMount } from 'svelte';

	function typewriting() {
		const typed = new Typed('#words', {
			strings: [
				'sustentable',
				'consciente',
				'eficiente',
				'resiliente',
				'competitiva',
				'precisa',
				'adaptativa'
			],
			typeSpeed: 100,
			backSpeed: 75,
			loop: true,
			startDelay: 1000,
			backDelay: 1500
		});
	}

	onMount(() => {
		typewriting();
		const nav = document.querySelector('nav');

		window.addEventListener('scroll', () => {
			if (window.scrollY > 10) {
				nav?.classList.add('scrolled');
			} else {
				nav?.classList.remove('scrolled');
			}
		});
	});
</script>

<nav>
	<a class="logo" href="/"
		><img src="/icons/pasturapp-logo.png" alt="PasturApp logo" /><span>PasturApp</span></a
	>
	<ul>
		<li><a href="#product">Producto</a></li>
		<li><a href="#how-it-works">Funcionalidad</a></li>
		<li><a href="#features">Características</a></li>
		<li><a href="#about-us">Sobre nosotros</a></li>
	</ul>
</nav>
<header>
	<div>
		<h1 class="heading">Uniendo tradición y tecnología para una producción <span id="words" /></h1>
	</div>
	<a class="swipe" href="#product"><img src="/icons/swipe-arrow.png" alt="swipe arrow" /></a>
</header>

<style lang="postcss">
	nav {
		@apply flex justify-between fixed w-full py-2 z-50;
	}

	ul {
		@apply flex flex-row items-center mr-6 invisible lg:visible;
	}

	li {
		@apply list-none mx-3 text-lg;
	}

	.logo {
		@apply flex items-center text-2xl ml-4;
	}

	.logo img {
		@apply w-16 h-16;
	}

	a {
		@apply no-underline;
		font-family: var(--font-brand);
		color: var(--white-background);
	}

	header {
		@apply relative shadow-xl;
		height: 50vh;
		background: linear-gradient(
				0deg,
				rgba(63, 112, 54, 0) 0%,
				rgba(63, 112, 54, 0.59) 44.55%,
				rgba(29, 91, 17, 0.59) 66.15%,
				rgba(22, 42, 19, 0.59) 89.32%
			),
			url('/background.png');
		background-size: cover;
	}

	@media (min-width: 1280px) {
		header {
			@apply h-screen;
		}
	}

	.heading {
		@apply text-4xl md:text-5xl;
		color: var(--white-background);
	}

	.heading span {
		@apply font-light drop-shadow-2xl;
		font-family: var(--font-header);
	}

	header div {
		@apply grid place-items-center h-full;
	}

	.swipe {
		@apply absolute bottom-0 left-0 right-0 mx-auto mb-8 rounded-full w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14;
	}
</style>
