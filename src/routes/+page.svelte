<script>
	import './index.css';
	import Chart from 'chart.js/auto';
	import { onMount } from 'svelte';
	import Recommendations from './components/recommendations.svelte';
	Chart.defaults.font.family = 'Montserrat';
	Chart.defaults.font.weight = 'bold';

	// import Swiper bundle with all modules installed
	import Swiper from 'swiper/bundle';

	// import styles bundle
	import 'swiper/css/bundle';

	let swiper; // Define a variable to hold the Swiper instance

	export let data;
	const establecimiento = data.dashboard[0];
	const plataforma = data.dashboard[1];

	onMount(() => {
		swiper = new Swiper('.swiper', {
			// Optional parameters
			loop: true,
			autoHeight: true,

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

<div class="header">
	<h1>¡Bienvenido a PasturApp!</h1>
</div>
<div class="wrapper">
	<section class="izquierda">
		<article class="establecimiento">
			<header>
				<h2>Datos del establecimiento</h2>
			</header>
			<div class="datos-resumen">
				<div class="recuadro">
					<h3>Fecha:</h3>
					<p>{establecimiento.mes}</p>
				</div>
				<div class="recuadro">
					<h3>Carga:</h3>
					<p>
						{establecimiento.carga} VO/haSEP
					</p>
				</div>
			</div>
		</article>
		<article class="produccion">
			<header>
				<h2>Datos de producción</h2>
			</header>
			<div class="datos-resumen">
				<div class="recuadro">
					<h3>Producción individual:</h3>
					<p>{establecimiento.produccion} lt/VO</p>
				</div>
				<div class="recuadro">
					<h3>Productividad:</h3>
					<p>{establecimiento.productividad} lt/ha/mes</p>
				</div>
			</div>
		</article>
		<article class="plataforma">
			<div>
				<h2>Plataforma de pastoreo</h2>
			</div>
			<div class="datos-resumen">
				<div class="recuadro">
					<h3>Oferta:</h3>
					<p>{plataforma.tc} kgMS/ha/d</p>
				</div>
				<div class="recuadro">
					<h3>Demanda:</h3>
					<p>{plataforma.demanda} kgMS/ha/d</p>
				</div>
			</div>
		</article>
	</section>

	<section class="derecha">
		<div class="swiper">
			<!-- Additional required wrapper -->
			<div class="swiper-wrapper">
				<!-- Slides -->
				{#each data.charts as grafica}
					<div class="swiper-slide">
						<div class="wrap">
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
	</section>
</div>

<style lang="postcss">
	.wrapper {
		@apply w-96 md:mt-0 md:w-3/4 lg:w-full lg:grid lg:gap-14 px-3;
		grid-template-columns: 1fr 1fr;
	}

	.wrap {
		@apply flex flex-col justify-center items-center gap-2;
	}

	.swiper {
		@apply hidden md:block md:max-w-2xl lg:max-w-5xl pb-7;
	}

	.establecimiento {
		@apply mt-2;
	}

	.grafica {
		@apply mt-4 pt-4 h-96 p-5 w-3/4 rounded-xl;
		background-color: var(--verde_fondos);
	}

	p {
		@apply text-2xl;
		font-family: var(--letra_titulo);
	}

	.izquierda {
		@apply lg:col-start-1 lg:col-end-2 flex flex-col justify-center;
	}

	.derecha {
		@apply lg:col-start-2 lg:col-end-4 flex justify-center items-center;
	}

	.header {
		@apply w-56 md:w-fit flex flex-col justify-center p-3 rounded-xl;
	}

	h1 {
		@apply text-2xl md:text-5xl text-center;
		font-family: 'comfortaa';
		color: var(--verde_oscuro);
	}

	h2 {
		@apply ml-2;
		font-family: var(--letra_titulo);
		color: var(--verde_oscuro);
	}

	h3 {
		@apply ml-2 text-xs;
		color: var(--verde_primario);
	}

	.swiper-button-prev,
	.swiper-button-next {
		color: var(--verde_secundario);
	}

	.recomendaciones {
		@apply mt-2 px-5 py-3 h-fit rounded-xl w-3/4 text-justify;
		background-color: var(--verde_fondos);
	}

	.datos-resumen {
		@apply flex flex-row text-xl justify-around text-center rounded-xl p-4 mb-4;
		color: var(--verde_primario);
		background-color: #cfe9d4;
	}

	.recuadro {
		@apply p-4 rounded-xl;
	}
</style>
