<script>
  import { onMount } from 'svelte';

  let data = {
    potreros: [],
    metodoUtilizado: '',
  };

	let selectedPotrero = '';
  let estados = '';
  let ops = '';

  async function fetchData() {
    let uuidCookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith('uuid='))
      ?.split('=')[1];
    uuidCookie = uuidCookie ? uuidCookie.split(',')[0] : null;

    if (uuidCookie) {
      try {
        const response1 = await fetch(
          `http://127.0.0.1:5000/api/user/${uuidCookie}/mediciones_pastureName`
        );

        if (!response1.ok) {
          throw new Error('Failed to fetch measurements data');
        }

        const measurementsData = await response1.json();
        data.potreros = measurementsData; // Lista de os padoques

        // Fetch data from /api/user/<uuid>/dashboard_estable for the method only (inefficient)
        const response2 = await fetch(
          `http://127.0.0.1:5000/api/user/${uuidCookie}/dashboard_estable`
        );

        if (!response2.ok) {
          throw new Error('Failed to fetch dashboard_estable data');
        }

        const dashboardData = await response2.json();
        data.metodoUtilizado = dashboardData.method_estable; // EL metodo
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    } else {
      window.location.href = '/inicio_sesion';
    }
  }

  onMount(async () => {
    await fetchData();
  });

	function handleSubmit() {
    // Check for cookie (logged in basically)
    let uuidCookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith('uuid='))
      ?.split('=')[1];
    uuidCookie = uuidCookie ? uuidCookie.split(',')[0] : null;

    if (!uuidCookie) {
      // log in pls
      window.location.href = '/inicio_sesion';
      return;
    }

    // Capture form data
    const date = document.getElementById('date').value;
    const estado = estados;
    const enPastoreo = ops;
    const disponibilidad = document.getElementById('disponibiliad').value;
		const potreroDropdown = document.querySelector('select[name="select"]');
		selectedPotrero = potreroDropdown.options[potreroDropdown.selectedIndex]?.text;

    const payload = {
      potrero: selectedPotrero,
      date,
      estado,
      enPastoreo,
      disponibilidad,
      metodoUtilizado: data.metodoUtilizado,
    };

    // Send an HTTP POST request to the API
    fetch(`http://127.0.0.1:5000/api/user/${uuidCookie}/upload_medicion`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to upload data');
        }
        return response.json();
      })
      .then((responseData) => {
        console.log('Upload successful:', responseData);
				// window.location.href = '/mediciones'; // redirects on success. not on fail. But maybe not needed
      })
      .catch((error) => {
        console.error('Error uploading data:', error);
      });
  }
</script>

<div>
	<h1>Mediciones</h1>
	<form>
		<div class="Potrero">
			<label for="select">Potrero</label><br />
			<select name="select">
				<option value="" disabled selected>Seleccionar...</option>
				{#each data.potreros as potrero}
					<option value="value1">{potrero.name_pasture}</option>
				{/each}
			</select>
		</div>
		<div>
			<label for="date">Fecha</label><br />
			<input type="date" id="date" name="date" />
		</div>
		<div>
			<h2>Estado</h2>

			{#each ['Pastoreo', 'Reserva', 'Barbecho'] as estado}
				<div class="opciones">
					<input type="radio" value={estado} bind:group={estados} />
					<label class="opciones" for="estado">{estado}</label>
				</div>
			{/each}
		</div>
		<div>
			<h2>¿En Pastoreo?</h2>

			{#each ['Si', 'No', 'Remanente'] as opciones}
				<label class="opciones" for="opciones">
					<input type="radio" value={opciones} bind:group={ops} />
					{opciones}
				</label>
			{/each}
		</div>
		<div class="Disponibilidad">
			<div><p>Disponibilidad</p>
				{#if data.metodoUtilizado === 'visual'}
					<label for="disponibilidad">Disponibilidad (kg/ha)</label>
				{:else if data.metodoUtilizado === 'plato'}
					<label for="disponibilidad">Altura de RPM</label>
				{:else if data.metodoUtilizado === 'regla'}
					<label for="disponibilidad">Altura de regla (cm)</label>
				{/if}
				<input type="text" id="disponibiliad" name="disponibiliad" />
			</div>
		</div>

		<button type="submit" on:click={handleSubmit}>Ingresar</button>	</form>
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
