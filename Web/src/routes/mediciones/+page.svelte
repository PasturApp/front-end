<script>
	let estados = [];
	let ops = [];

	const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
</script>

<div>
	<h1>Mediciones</h1>
	<form>
		<div class="Potrero">
			<label for="select">Potrero</label><br />
			<select name="select">
				<option value="" disabled selected>Seleccionar...</option>
				<option value="value1">Potrero 1</option>
				<option value="value2">Potrero 2</option>
				<option value="value3">Potrero 3</option>
			</select>
		</div>
		<div>
			<label for="Fecha">Fecha</label><br />
			<input type="date" id="Fecha" name="Fecha" />
		</div>
		<div>
			<h2>Estado</h2>

			{#each ['Pastoreo', 'Remanente', 'Reserva', 'Barbecho'] as estado}
				<div class="opciones">
					<input type="radio" value={estado} bind:group={estados} />
					<label class="opciones" for="estado">{estado}</label>
				</div>
			{/each}
		</div>
		<div>
			<h2>¿En Pastoreo?</h2>

			{#each ['Si', 'No'] as opciones}
				<label class="opciones" for="opciones">
					<input type="radio" value={opciones} bind:group={ops} />
					{opciones}
				</label>
			{/each}
		</div>
		<div class="Disponibilidad">
			<div>
				<label for="disponibilidad">Disponibilidad (kg/ha)</label>
				<input type="text" id="disponibiliad" name="disponibiliad" />
			</div>
		</div>

		<button type="submit">Ingresar</button>
	</form>
</div>

<style lang="css">
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

	input {
		@apply rounded-3xl pl-3 border-none font-semibold;
		color: var(--verde_secundario);
		font-family: Montserrat;
		background-color: var(--verde_fondos);
	}

	input[type='date'] {
		@apply p-2;
		color: var(--verde_secundario);
	}

	input[type='radio'] {
		@apply m-2;
	}

	input:not([type='radio']) {
		@apply h-6 w-full;
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

	h2 {
		@apply text-sm pl-2 pb-0;
		color: var(--verde_oscuro);
	}
	::placeholder {
		color: 686868;
	}

	.opciones {
		color: var(--verde_secundario);
	}

	select {
		@apply rounded-xl w-full pl-2;
		background-color: var(--verde_fondos);
		color: var(--verde_secundario);
	}
</style>
