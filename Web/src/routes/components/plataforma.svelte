<script>
	export let plataforma;
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
			<td class="filtro"><input type="text" placeholder="Filtrar" bind:value={fecha} /></td>
			<td class="filtro"><input type="text" placeholder="Filtrar" bind:value={potrero} /></td>
			<td class="filtro"><input type="text" placeholder="Filtrar" bind:value={estado} /></td>
			<td class="filtro"><input type="text" placeholder="Filtrar" bind:value={pastoreo} /></td>
			<td class="filtro"><input type="text" placeholder="Filtrar" bind:value={disponibilidad} /></td
			>
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
	div {
		@apply max-w-2xl lg:max-w-full overflow-x-scroll;
	}
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
		@apply mt-4 border-separate border-spacing-0 text-center w-full mb-3;
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
	div::-webkit-scrollbar {
		width: 12px;
		height: 15px;
	}
	div::-webkit-scrollbar-button {
		width: 0px;
		height: 0px;
	}
	div::-webkit-scrollbar-thumb {
		background: var(--verde_oscuro);
		border: 0px none #ffffff;
		border-radius: 50px;
		height: auto;
	}
	div::-webkit-scrollbar-thumb:hover {
		background: var(--verde_primario);
	}
	div::-webkit-scrollbar-thumb:active {
		background: var(--verde_secundario);
	}
	div::-webkit-scrollbar-track {
		background: transparent;
		border: 0px none #ffffff;
		border-radius: 50px;
		height: auto;
	}
	div::-webkit-scrollbar-track:hover {
		background: transparent;
	}
	div::-webkit-scrollbar-track:active {
		background: transparent;
	}
	div::-webkit-scrollbar-corner {
		background: transparent;
	}
</style>
