<script>
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
	});
</script>

<!-- Slider main container -->
<div class="swiper">
	<!-- Additional required wrapper -->
	<div class="swiper-wrapper">
		<!-- Slides -->
		{#each ['Pastoreo', 'Stock', 'Tasa de Crecimento', 'Uso del suelo'] as grafica}
			<div class="swiper-slide">
				<div class="titulo">
					<h1>{grafica}</h1>
				</div>
				<div class="wrapper">
					<div class="recomendaciones">
						<h2>Recomendaciones:</h2>
					</div>
					<div class="grafica">grafica aqui</div>
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

<style lang="css">
	.swiper {
		@apply max-w-5xl h-fit;
	}

	.titulo {
		@apply flex justify-center;
	}

	.wrapper {
		@apply flex flex-row justify-center gap-5;
	}

	h1 {
		@apply rounded-2xl px-20 py-2 text-center text-xl font-semibold;

		background-color: var(--verde_secundario);
		font-family: var(--letra_titulo);
		color: var(--verde_fondos);
	}

	.recomendaciones {
		@apply mt-4 pt-4 pb-80 p-12 rounded-xl;
		background-color: var(--verde_fondos);
	}

	.grafica {
		@apply mt-4 pt-4 pb-80 p-60 rounded-xl;
		background-color: var(--verde_fondos);
	}

	.swiper-button-prev,
	.swiper-button-next {
		color: var(--verde_secundario);
	}
</style>
