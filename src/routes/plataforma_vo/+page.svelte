<script>
	export let data;
	const potreros = data.potreros;
	import { onMount } from 'svelte';

	onMount(() => {
		const form = document.getElementById('my_form');

		form.addEventListener('submit', function handleSubmit(event) {
			event.preventDefault();
			form.reset();
		});
	});
</script>

<div>
	<h1>Plataforma de pastoreo de VO</h1>
	<div class="one">
		<form id="my_form">
			<div class="potrero">
				<label for="potrero">Potrero</label>
				<input type="text" id="potrero" name="potrero" required />
			</div>

			<div class="area">
				<label for="area">Área (ha)</label>
				<input type="text" id="area" name="area" required />
			</div>

			<button type="submit">Ingresar</button>
		</form>
		<div class="datos">
			<a href="/plataforma_vo/datos_ingresados">Datos ingresados</a>
		</div>
	</div>
	<div class="two">
		<table>
			<tr>
				<th>Potrero</th>
				<th>Área (ha)</th>
			</tr>
			{#each potreros as potrero}
				<tr>
					<td>{potrero.potrero}</td>
					<td>{potrero.area}</td>
				</tr>
			{/each}
		</table>
	</div>
	<div class="modificar-div">
		<button class="modificar">Modificar</button>
	</div>
</div>

<style lang="css">
	div {
		@apply flex flex-col align-middle;
	}
	div.one {
		@apply flex align-middle items-center;
	}
	form {
		@apply mt-4 flex flex-col gap-2 max-w-xs;
	}

	button {
		@apply rounded-2xl max-w-full h-6 text-center cursor-pointer mt-4;

		background-color: var(--verde_secundario);
		font-family: var(--letra_titulo);
		color: var(--verde_fondos);
	}

	button:hover {
		background-color: #33582c;
	}

	.modificar {
		@apply w-28;
	}

	.modificar-div {
		@apply text-center align-middle items-center hidden;
		@apply md:block;
	}

	.datos {
		@apply text-center mt-8;
	}

	a {
		@apply rounded-2xl text-center p-1.5;
		@apply md:hidden;
		background-color: #8da478;
		font-family: var(--letra_titulo);
		color: var(--verde_fondos);
	}

	input {
		@apply rounded-3xl pl-3 h-6 w-full border-none font-semibold;
		color: var(--verde_secundario);
		font-family: Montserrat;
		background-color: var(--verde_fondos);
	}

	input:focus {
		outline-color: var(--verde_oscuro);
	}

	h1 {
		@apply rounded-2xl max-w-full h-12 mt-4 text-center text-xl font-semibold p-2;
		background-color: var(--verde_secundario);
		font-family: var(--letra_titulo);
		color: var(--verde_fondos);
	}

	label {
		@apply text-sm pl-2 pb-0;
		color: var(--verde_oscuro);
	}

	table {
		@apply border-separate border-spacing-0;
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
		@apply text-center;
		background: var(--verde_fondos);
		color: var(--verde_oscuro);
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

	.one {
		@apply md:float-left md:mr-8;
	}

	.two {
		@apply hidden overflow-y-scroll h-60 mt-4;
		@apply md:block md:float-right;
	}
	.two::-webkit-scrollbar {
		width: 12px;
		height: 115px;
	}
	.two::-webkit-scrollbar-button {
		width: 0px;
		height: 0px;
	}
	.two::-webkit-scrollbar-thumb {
		background: var(--verde_oscuro);
		border: 0px none #ffffff;
		border-radius: 50px;
		height: auto;
	}
	.two::-webkit-scrollbar-thumb:hover {
		background: var(--verde_primario);
	}
	.two::-webkit-scrollbar-thumb:active {
		background: var(--verde_secundario);
	}
	.two::-webkit-scrollbar-track {
		background: transparent;
		border: 0px none #ffffff;
		border-radius: 50px;
		height: auto;
	}
	.two::-webkit-scrollbar-track:hover {
		background: transparent;
	}
	.two::-webkit-scrollbar-track:active {
		background: transparent;
	}
	.two::-webkit-scrollbar-corner {
		background: transparent;
	}
</style>
