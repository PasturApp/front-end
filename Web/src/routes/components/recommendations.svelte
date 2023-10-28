<script>
	export let grafica;
	const graph_data = grafica.data.datasets[0].data;
	const last = graph_data.length - 1;
</script>

{#if grafica.title === 'Stock'}
	{#if graph_data[last] >= 2750}
		<p>
			<span>Stock supera el objetivo - </span>Acortar rotación o analizar posible cierre de área
			para reserva.
		</p>
	{:else if graph_data[last] <= 2250}
		<p>
			<span>Stock por debajo del objetivo - </span>Alargar rotación bajando el n° de sesiones de
			potrero, aumentando concentrado o reserva.
		</p>
	{:else}
		<p><span>Stock dentro del objetivo - </span>Continuar con el manejo actual.</p>
	{/if}
{:else if grafica.title === 'Pastoreo'}
	{#if graph_data[0] >= 2500}
		<p>
			Si el potrero tiene entre 2.5 a 3 hojas, pastorear. De lo contrario, chequear si el próximo
			potrero cumple con la condición.
		</p>
	{:else}
		<p>Esperar para ingresar a pastorear.</p>
	{/if}
	<div class="lluvias">
		<img src="../images/luz.png" alt="lamparita" height="23px" width="23px">
		<p >En caso de lluvias intensas revisar que el potrero esté firme para preservar la vida útil de la pastura.</p>
	</div>
{/if}

<style>
	p {
		@apply inline text-sm;
	}

	span {
		@apply italic;
	}

	.lluvias {
		@apply text-xs pt-2;
	}

	.lluvias p {
		@apply text-xs;
	}
	img {
		@apply inline;
	}
</style>
