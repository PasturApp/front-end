<script>
	import { onMount } from 'svelte';

	let selectedMethod = '';

	async function uploadEstablishment(event) {
		event.preventDefault(); // Prevent the default form submission

		const date = document.getElementById("mes").value;
		const nvo = document.getElementById("vacas").value;
		const avgwgt = document.getElementById("pesoVivo").value;
		const avgprod = document.getElementById("produccion").value;
		const stock = document.getElementById("stock").value;
		const measurement = selectedMethod;

		let uuidCookie = document.cookie
			.split('; ')
			.find(row => row.startsWith('uuid='))
			?.split('=')[1];
		uuidCookie = uuidCookie ? uuidCookie.split(',')[0] : null;

		if (uuidCookie) {
			const response = await fetch(`http://127.0.0.1:5000/api/user/${uuidCookie}/upload_establishment`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ date, nvo, avgwgt, avgprod, measurement, stock }),
			})
				.then(response => {
					if (!response.ok) {
						throw new Error("Not OK :(");
					}
					console.log(response);
					return response.json();
				})
				.then(data => {
					let jsonData = data;
					// window.location.href = "http://localhost:5173/cuenta"; // Redirect to dashboard??
				})
				.catch(error => console.error('Error', error));
		} else {
			// Handle the case when uuidCookie doesn't exist
			console.log('uuidCookie does not exist. Handle this case.');
			window.location.href = '/inicio_sesion';
		}
	}

	onMount(async () => {
		// Nothing needed to happen onMount currently
	});
</script>

<div>
	<h1>Datos del establecimiento</h1>
	<form>
		<div>
			<label for="mes">Fecha</label><br />
			<input type="date" id="mes" name="mes" />
		</div>
		<div class="vacas">
			<label for="vacas">N° de Vacas en Ordeñe</label><br />
			<input type="text" id="vacas" name="vacas" />
		</div>
		<div>
			<label for="pesoVivo">Peso vivo (kg/VO)</label><br />
			<input type="text" id="pesoVivo" name="pesoVivo" />
		</div>
		<div class="producción">
			<label for="produccion">Producción individual (lt/VO)</label><br />
			<input type="text" id="produccion" name="produccion" />
		</div>
		<div>
			<h2>Método de medición</h2>

			{#each ['Visual', 'Regla', 'Plato medidor'] as metodo}
			<div class="metodo">
				<input type="radio" value={metodo} bind:group={selectedMethod} />
				<label class="metodo" for={metodo}>{metodo}</label>
			</div>
		{/each}
		</div>
		<div class="stock">
			<label for="stock">Stock objetivo(kg/ha)</label>
			<input type="text" id="stock" name="stock" value="2500" />
		</div>

		<button type="submit" on:click={uploadEstablishment}>Ingresar</button>
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

	.metodo {
		color: var(--verde_secundario);
	}
</style>
