<script>
	import Chart from 'chart.js/auto';
	import Recommendations from '../components/recommendations.svelte';
	export let data;
	Chart.defaults.font.family = 'Montserrat';
	Chart.defaults.font.weight = 'bold';

	// import Swiper bundle with all modules installed
	import Swiper from 'swiper/bundle';

	// import styles bundle
	import 'swiper/css/bundle';

	import { onMount } from 'svelte';

	let swiper; // Define a variable to hold the Swiper instance

	onMount(() => {
		swiper = new Swiper('.swiper', {
			// Optional parameters
			loop: true,

			// If we need pagination
			pagination: {
				el: '.swiper-pagination'
			},

			// Navigation arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		});

		data.charts.forEach(({ canvaId, type, data, options }) => {
			const canva = document.getElementById(canvaId);

			new Chart(canva, {
				type: type,
				data: data,
				options: options
			});
		});
	});
</script>

<!-- Slider main container -->
<div class="swiper">
	<!-- Additional required wrapper -->
	<div class="swiper-wrapper">
		<!-- Slides -->
		{#each data.charts as grafica}
			<div class="swiper-slide">
				<div class="titulo">
					<h1>{grafica.title}</h1>
				</div>
				<div class="wrapper">
					<div class="grafica">
						<canvas id={grafica.canvaId} />
					</div>
					{#if grafica.title === 'Stock' || grafica.title === 'Pastoreo'}
						<div class="recomendaciones">
							<h2>Recomendaciones:</h2>
							<Recommendations {grafica} />
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>
	<!-- If we need pagination -->
	<div class="swiper-pagination" />

	<!-- If we need navigation buttons -->
	<div class="swiper-button-prev" />
	<div class="swiper-button-next" />
</div>

<style lang="postcss">
	.swiper {
		@apply max-w-5xl h-full pt-6;
	}

	.titulo {
		@apply flex justify-center;
	}

	.wrapper {
		@apply flex flex-col justify-center items-center gap-2;
	}

	h1 {
		@apply rounded-2xl px-20 py-2 text-center text-xl font-semibold;

		background-color: var(--verde_secundario);
		font-family: var(--letra_titulo);
		color: var(--verde_fondos);
	}

	.recomendaciones {
		@apply mt-4 p-4 px-7 h-fit w-1/2 text-center rounded-xl;
		background-color: var(--verde_fondos);
	}

	h2 {
		@apply inline pr-2 text-lg;
		font-family: var(--letra_titulo);
		color: var(--verde_primario);
	}

	.grafica {
		@apply mt-4 pt-4 h-96 w-2/4 p-5 rounded-xl;
		background-color: var(--verde_fondos);
	}

	.swiper-button-prev,
	.swiper-button-next {
		color: var(--verde_secundario);
	}
</style>
