<script>
	export let data;

	const plataforma = data.plataform;
	let potrero = '';
	let fecha = '';
	let estado = '';
	let pastoreo = '';
	let disponibilidad = '';

	$: tableData = plataforma.filter(
		(item) =>
			item.potrero.toLocaleLowerCase().includes(potrero.toLocaleLowerCase()) &&
			item.fecha.includes(fecha) &&
			item.estado.toLocaleLowerCase().includes(estado.toLocaleLowerCase()) &&
			item.pastoreo.toLocaleLowerCase().includes(pastoreo.toLocaleLowerCase()) &&
			item.disponibilidad.toString().includes(disponibilidad)
	);
</script>

<div class="buttons">
	<button id="plataforma">Plataforma</button>
	<button id="stock">Stock</button>
	<button id="tc">Tasa de crecimiento</button>
</div>
<div>
	<table>
		<tr>
			<th>Fecha</th>
			<th>Potrero</th>
			<th>Estado</th>
			<th>Pastoreo</th>
			<th>Disponibilidad</th>
		</tr>
		<tr>
			<th><input type="text" placeholder="Filtrar" bind:value={fecha} /></th>
			<th><input type="text" placeholder="Filtrar" bind:value={potrero} /></th>
			<th><input type="text" placeholder="Filtrar" bind:value={estado} /></th>
			<th><input type="text" placeholder="Filtrar" bind:value={pastoreo} /></th>
			<th><input type="text" placeholder="Filtrar" bind:value={disponibilidad} /></th>
		</tr>
		{#each tableData as dato}
			<tr>
				<td>{dato.fecha}</td>
				<td>{dato.potrero}</td>
				<td>{dato.estado}</td>
				<td>{dato.pastoreo}</td>
				<td>{dato.disponibilidad}</td>
			</tr>
		{/each}
	</table>
</div>

<style lang="css">
	button {
		@apply border-2 border-solid rounded-2xl px-5 m-2;
		border-color: var(--verde_primario);
		font-family: var(--letra_titulo);
		color: var(--verde_primario);
	}

	input[type='text'] {
		@apply rounded-lg;
		color: black;
		background-color: #67a053;
	}

	input[type='text']::placeholder {
		@apply text-center;
		color: var(--verde_secundario);
	}

	table {
		@apply mt-4 border-separate border-spacing-0;
		min-width: 350px;
	}

	table tr th,
	table tr td {
		@apply p-1 border-r-2 border-b-2 border-solid;
		border-color: var(--blanco_fondo);
	}

	table tr th:first-child,
	table tr td:first-child {
		@apply border-l-2 border-solid;
		border-color: var(--blanco_fondo);
	}

	table tr th {
		@apply border-t-2 border-b-4 border-solid text-center rounded-xl;
		background: var(--verde_primario);
		border-color: var(--blanco_fondo);
		color: var(--verde_fondos);
	}

	table tr td {
		background: var(--verde_fondos);
	}

	/* top-left border-radius */
	table tr:nth-child(2) td:first-child {
		@apply rounded-tl-md;
	}

	/* top-right border-radius */
	table tr:nth-child(2) td:nth-child(2) {
		@apply rounded-tr-md;
	}

	/* bottom-left border-radius */
	table tr:last-child td:first-child {
		@apply rounded-bl-md;
	}

	/* bottom-right border-radius */
	table tr:last-child td:last-child {
		@apply rounded-br-md;
	}
</style>
