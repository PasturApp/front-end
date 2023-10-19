<script>
	let exportados = [];
</script>

<div>
	<h1>Exportar datos</h1>

	<form>
		{#each ['Mediciones', 'Pastoreo', 'Stock', 'Tasa de crecimiento'] as opciones}
			<div class="opciones">
				<input type="checkbox" value={opciones} bind:group={exportados} />
				<label class="opciones" for="opciones">{opciones}</label>
			</div>
		{/each}
		<button type="submit">Exportar</button>
	</form>
</div>

<style lang="css">
	h1 {
		@apply rounded-2xl w-full h-12 mt-4 text-center text-xl font-semibold p-2;

		background-color: var(--verde_secundario);
		font-family: var(--letra_titulo);
		color: var(--verde_fondos);
	}

	form {
		@apply m-12 mt-6 flex flex-col gap-2 max-w-xs;
	}

	.opciones {
		color: var(--verde_secundario);
	}

	button {
		@apply rounded-2xl max-w-full h-6 text-center cursor-pointer mt-4;

		background-color: var(--verde_secundario);
		font-family: var(--letra_titulo);
		color: var(--verde_fondos);
	}
</style>
