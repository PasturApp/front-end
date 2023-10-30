<script>
	export let stock;
	let fecha = '';
	let disponibilidad = '';

	$: tableData = stock.filter(
		(item) =>
			item.fecha.toLocaleLowerCase().includes(fecha.toLocaleLowerCase()) &&
			item.disponibilidad.toString().includes(disponibilidad)
	);
</script>

<div>
	<table>
		<tr>
			<th>Fecha</th>
			<th>Disponibilidad</th>
		</tr>
		<tr>
			<td class="filtro"><input type="text" placeholder="Filtrar" bind:value={fecha} /></td>
			<td class="filtro"
				><input type="text" placeholder="Filtrar" bind:value={disponibilidad} />
			</td></tr
		>
		{#each tableData as dato}
			<tr>
				<td>{dato.fecha}</td>
				<td>{dato.disponibilidad}</td>
			</tr>
		{/each}
	</table>
</div>

<style lang="css">
	input[type='text'] {
		@apply rounded-lg pl-2;
		color: var(--verde_oscuro);
		background-color: #d9e6dc;
	}

	input[type='text']::placeholder {
		@apply text-center;
		color: #a8b1aa;
	}

	.filtro {
		background-color: var(--verde_fondos);
	}

	table {
		@apply mt-4 border-separate border-spacing-0 text-center mr-3;
		min-width: 350px;
		color: var(--verde_oscuro);
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
	table tr:nth-child(2) td:nth-child(5) {
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
