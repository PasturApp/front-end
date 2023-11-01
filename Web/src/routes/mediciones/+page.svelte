<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	export let data;

	const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
	const potrero = writable('');
	const fecha = writable('');
	const selectedEstado = writable('');
	const enPastoreo = writable('');
	const disponibilidad = writable('');
	const sendData = async () => {
		const formData = {
			nombre_potrero: $potrero,
			medi_state: $selectedEstado,
			pastoreo: $enPastoreo === 'Si' ? 1 : 0,
			availability: $disponibilidad,
			date: $fecha
		};

		try {
			const res = await fetch('http://localhost:5000/api/insertar/mediciones', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});

			if (res.ok) {
				const response = await res.json();
				console.log(response);
			} else {
				throw new Error('Failed to send data');
			}
		} catch (error) {
			console.error(error);
		}
	};
	const debugFormData = () => {
		console.log('Datos del formulario:');
		console.log('Potrero:', $potrero);
		console.log('Fecha:', $fecha);
		console.log('Estados:', $selectedEstado);
		console.log('Ops:', $enPastoreo);
		console.log('Disponibilidad:', $disponibilidad);
	};
</script>

<div>
	<h1>Mediciones</h1>
	<form on:submit|preventDefault={sendData}>
		<div class="Potrero">
			<label for="select">Potrero</label><br />
			<select bind:value={$potrero}>
				<option value="" disabled selected>Seleccionar...</option>
				{#each data.potreros as potrero}
					<option value={potrero[0]}>{potrero[0]}</option>
				{/each}
			</select>
		</div>
		<div>
			<label for="Fecha">Fecha</label><br />
			<input type="date" bind:value={$fecha} />
		</div>
		<div>
			<h2>Estado</h2>

			{#each ['Pastoreo', 'Remanente', 'Reserva', 'Barbecho'] as estado}
				<div class="opciones">
					<input type="radio" value={estado} bind:group={$selectedEstado} />
					<label class="opciones" for="estado">{estado}</label>
				</div>
			{/each}
		</div>
		<div>
			<h2>¿En Pastoreo?</h2>

			{#each ['Si', 'No'] as opciones}
				<label class="opciones" for="opciones">
					<input type="radio" value={opciones} bind:group={$enPastoreo} />
					{opciones}
				</label>
			{/each}
		</div>
		<div class="Disponibilidad">
			<div>
				<label for="disponibilidad">Disponibilidad (kg/ha)</label>
				<input type="text" id="disponibiliad" bind:value={$disponibilidad} />
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
