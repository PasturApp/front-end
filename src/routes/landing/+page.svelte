<script>
	import { onMount } from 'svelte';
	import '../landing.css';
	import Header from './Header.svelte';
	import Product from './Product.svelte';
	import Functionality from './Functionality.svelte';
	import Features from './Features.svelte';
	import AboutUs from './AboutUs.svelte';

	onMount(() => {
		const mediaList = document.querySelector('ul.media-list');

		window.addEventListener('scroll', () => {
			if (window.scrollY > 400) {
				mediaList?.classList.remove('hidden');
				mediaList?.classList.add('animation');
			} else {
				mediaList?.classList.remove('animation');
				mediaList?.classList.add('hidden');
			}
		});
	});
</script>

<Header />
<main>
	<Product />
	<Functionality />
	<Features />
	<AboutUs />
	<ul class="media-list">
		<a href="/"><li><img src="/icons/instagram.png" alt="Instagram logo" /></li></a>
		<a href="/"><li><img src="/icons/gmail.png" alt="Gmail logo" /></li></a>
	</ul>
</main>

<style lang="postcss">
	.media-list {
		@apply fixed hidden md:grid px-3 bottom-0 left-0 justify-items-center;
		transform: translateY(-10%);
	}

	.media-list::after {
		@apply w-0.5 h-20;
		content: '';
		background-color: var(--dark-green);
	}

	.media-list img {
		@apply h-8 mb-3;
	}
</style>
