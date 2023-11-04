<section id="product">
	<article class="product-description">
		<h2 class="heading">¿Qué es PasturApp?</h2>
		<p class="default-text">
			PasturApp es una herramienta de autogestión que contribuye a la eficiencia de los procesos y
			de los resultados tomando en cuenta diversos factores que hacen a la complejidad de un sistema
			lechero. Las funcionalidades de la aplicación suponen un respaldo tanto para asesores como
			para productores en la toma de decisiones.
		</p>
		<button class="go-to-app">Ir a la App</button>
	</article>
	<div class="product-overview">
		<img src="/overview.png" alt="product overview" />
	</div>
</section>

<style lang="postcss">
	#product {
		@apply relative flex flex-col md:flex-row justify-between gap-20 items-center py-36 px-20 xl:py-28;
	}

	#product > * {
		@apply flex-1;
	}

	.heading {
		@apply bg-clip-text text-transparent p-1;
		background-image: linear-gradient(var(--dark-green), var(--primary-green));
	}

	.product-description {
		@apply flex flex-col justify-evenly items-center w-full md:h-1/2 md:w-1/2;
	}

	.default-text {
		opacity: 55%;
	}

	.go-to-app {
		@apply font-bold py-2 px-4 my-4 rounded-full w-1/3;
		background-color: var(--secondary-green);
		color: var(--white-background);
		transition: all 0.3s;
	}

	.go-to-app:hover {
		background-color: var(--primary-green);
	}

	.product-overview {
		@apply flex justify-center items-center;
	}

	.product-overview img {
		@apply w-full xl:w-4/5;
	}

	@media only screen and (hover: none) {

	}
</style>
