<script>
	const dataFeatures = [
		{
			title: 'Medición',
			description:
				'Permite llevar un registro detallado del sistema pastoril así como también del sistema animal de forma rápida y sencilla',
			image: '/icons/ruler.png'
		},
		{
			title: 'Visualización',
			description:
				'Cuenta con un visualizador de datos en formato gráfico y de tablas. Admite exportar los datos en formato CSV',
			image: '/icons/graph.png'
		},
		{
			title: 'Recomendaciones',
			description:
				'Con base en los balances de oferta y demanda ofrece recomendaciones sencillas de manejo del sistema pastoril',
			image: '/icons/light.png'
		},
		{
			title: 'Historial',
			description:
				'Almacena todos los datos ingresados premitiendo reconstruir la historia de cada potrero del establecimiento',
			image: '/icons/history.png'
		}
	];
</script>

<section id="features">
	<article>
		<h2 class="heading">Características</h2>
		<ul class="features">
			{#each dataFeatures as feature, i}
				<li class="feature default-text">
					<img src={feature.image} alt={feature.title} />
					<div class="details">
						<h3>{feature.title}</h3>
						<p>{feature.description}</p>
					</div>
				</li>
				{#if i !== dataFeatures.length - 1}
					<div class="divider" />
				{/if}
			{/each}
		</ul>
	</article>
</section>

<style lang="postcss">
	#features {
		@apply flex relative justify-center items-center py-20 px-20 xl:py-10;
	}

	#features > * {
		@apply flex-1;
	}

	article {
		@apply flex w-full flex-col justify-center items-center gap-11 my-14 md:flex-row;
	}

	.heading {
		@apply mb-0 bg-clip-text text-transparent;
		background-image: linear-gradient(var(--dark-green), var(--primary-green));
	}

	.features {
		@apply w-full;
	}

	.feature {
		@apply flex items-center justify-center;
	}

	.feature img {
		@apply float-left h-14 w-auto my-4 mx-8 xl:h-10;
		flex: 0 0 auto;
	}

	.feature h3 {
		@apply text-xl font-bold mb-2 xl:text-xl;
	}

	.feature p {
		@apply text-lg text-justify xl:text-xl;
	}
</style>
