<script>
	import './index.css';
	import Calendar from 'color-calendar';
	import 'color-calendar/dist/css/theme-basic.css';
	import 'color-calendar/dist/css/theme-glass.css';
	import { onMount } from 'svelte';
	import Icons from './icons.svelte';
	import { format } from 'date-fns';

	export let data;
	const establecimiento = data.dashboard[0];
	const plataforma = data.dashboard[1];
	onMount(() => {
		const calendar = new Calendar({
			theme: 'glass',
			id: '#color-calendar',
			eventsData: [
				{
					id: 1,
					name: 'French class',
					start: '2023-11-17T06:00:00',
					end: '2023-11-17T20:30:00'
				}
			],
			primaryColor: '#528A3F',
			headerColor: '#F5FFFA',
			headerBackgroundColor: '#3F6F37',
			weekdaysColor: '#0C523B',
			dateChanged: (currentDate, events) => {
				const divElements = document.getElementsByClassName('fecha');
				if (divElements.length > 0) {
					const shortDate = format(currentDate, 'dd/MM/yyyy');
					divElements[0].innerHTML = `<p>${shortDate}</p>`;
					events.forEach((event) => {
						const toDate = new Date(event.start);
						const shortDate = format(toDate, 'dd/MM/yyyy');
						divElements[0].innerHTML = `<p>${shortDate}</p>`;
						divElements[0].innerHTML += `<p>${event.name}</p>`;
					});
				}
			}
		});

		const addEventForm = document.querySelector('.addEventForm');
		const addEventButton = document.querySelector('.addEvent');

		addEventButton.addEventListener('click', () => {
			if (addEventForm.style.display === 'none') {
				addEventForm.style.display = 'block';
			} else {
				addEventForm.style.display = 'none';
			}
		});

		addEventForm.addEventListener('submit', (event) => {
			event.preventDefault();
			// Obtenga los valores de los campos del formulario
			const title = event.target.elements.title.value;
			const start = event.target.elements.start.value;
			const end = event.target.elements.end.value;

			// Agregue el evento al calendario
			calendar.addEventsData([
				{
					title: title,
					start: start,
					end: end
				}
			]);

			// Cierre el popup form
			addEventForm.style.display = 'none';
		});
	});
	let newItem = '';
	let todoList = [];

	function removeFromList(index) {
		todoList.splice(index, 1);
		todoList = todoList;
	}

	function addTodo() {
		if (newItem !== '') {
			todoList = [
				...todoList,
				{
					task: newItem,
					completed: false
				}
			];
			newItem = '';
		}
	}
</script>

<div class="wrapper">
	<div class="izquierda">
		<div class="datos">
			<div class="establecimiento">
				<div>
					<h1>Datos del establecimiento</h1>
				</div>
				<div class="datos-lista">
					<ul>
						<li>Última actualización: {establecimiento.mes}</li>
						<li>N° de vacas: {establecimiento.vacas}</li>
						<li>PV: {establecimiento.pv} kg/VO</li>
						<li>Producción individual: {establecimiento.produccion} lt/VO</li>
						<li>Carga: {establecimiento.carga} VO/haSEP</li>
					</ul>
				</div>
			</div>
			<div class="plataforma">
				<div>
					<h1>Plataforma de pastoreo</h1>
				</div>
				<div class="datos-lista">
					<ul>
						<li>Fecha: {plataforma.fecha}</li>
						<li>TC: {plataforma.tc} kgMS/ha</li>
						<li>Demanda: {plataforma.demanda} kgMS/ha</li>
						<li>Stock: {plataforma.stock} kgMS/ha</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="container">
			<div>
				<h1>Lista de tareas</h1>
				<form on:submit|preventDefault={addTodo}>
					<input
						bind:value={newItem}
						type="task"
						class="todos__input"
						placeholder="Agregar tarea"
					/>
					<button class="todos__button">+</button>
				</form>
				{#each todoList as item, index}
					<div class="todo">
						<span class={`todo__text ${item.completed ? 'todo__checked--strike' : ''}`}
							>{item.task}</span
						>
						<div class="icons">
							<button class="icon__button" on:click={() => (item.completed = !item.completed)}>
								<Icons name="check-mark" class="icon" />
							</button>

							<button class="icon__button" on:click={() => removeFromList(index)}>
								<Icons name="delete" class="icon" />
							</button>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
	<div class="derecha">
		<div class="calendario" id="color-calendar" />
		<div class="evento">
			<h1 class="titulo">Eventos</h1>
			<button class="addEvent">+</button>
			<div>
				<form class="addEventForm">
					<div>
						<label for="titulo">Título del evento</label><br>
						<input type="text" id="titulo" name="titulo" />
					</div>
					<div>
						<label for="inicio">Inicio</label><br>
						<input type="datetime-local" id="inicio" name="inicio"/>
					</div>
					<div>
						<label for="fin">Finalización</label><br>
						<input type="datetime-local" id="fin" name="fin" />
					</div>
					<button type="submit" class="submit">Agregar</button>
				</form>
			</div>
			<div class="fecha" />
		</div>
	</div>
</div>

<style lang="postcss">
	.wrapper {
		@apply mt-14 w-full md:mt-0 md:w-3/4 lg:w-full lg:grid lg:gap-3;
		grid-template-columns: 2fr 1fr;
	}

	.izquierda {
		@apply lg:grid lg:gap-1;
	}

	.datos {
		@apply w-full lg:grid lg:gap-3 lg:row-start-1 lg:row-end-2;
	}

	.establecimiento {
		@apply lg:col-start-1 lg:col-end-2;
	}

	h1 {
		@apply ml-2;
		font-family: var(--letra_titulo);
		color: var(--verde_oscuro);
	}

	.datos-lista {
		@apply pl-8 rounded-xl;
		background-color: var(--verde_secundario);
	}

	.container div {
		@apply p-4 lg:row-start-2 lg:row-end-3;
	}

	.datos-lista {
		@apply h-36;
		line-height: 150px;
	}

	ul {
		@apply list-disc inline-block align-middle leading-normal;
	}

	li {
		font-family: var(--letra_titulo);
		color: var(--blanco_fondo);
	}

	.plataforma {
		@apply lg:col-start-2 lg:col-end-3;
	}

	.derecha {
		@apply lg:grid gap-3;
	}

	.calendario {
		@apply hidden;
		@apply lg:block lg:row-start-1 lg:row-end-2;
	}

	.evento {
		@apply w-full xl:w-96 lg:row-start-2 lg:row-end-3;
	}

	.fecha {
		@apply p-6 pl-8 rounded-xl text-2xl;
		background-color: var(--verde_secundario);
		font-family: var(--letra_titulo);
		color: var(--blanco_fondo);
	}
	.container h1 {
		@apply text-4xl;
		color: var(--verde_oscuro);
	}

	.container {
		@apply h-60 md:h-96 overflow-y-scroll;
	}

	.container::-webkit-scrollbar {
		width: 12px;
		height: 115px;
	}
	.container::-webkit-scrollbar-button {
		width: 0px;
		height: 0px;
	}

	.container::-webkit-scrollbar-thumb {
		background: var(--verde_oscuro);
		border: 0px none #ffffff;
		border-radius: 50px;
		height: auto;
	}
	.container::-webkit-scrollbar-thumb:hover {
		background: var(--verde_primario);
	}
	.container::-webkit-scrollbar-thumb:active {
		background: var(--verde_secundario);
	}
	.container::-webkit-scrollbar-track {
		background: transparent;
		border: 0px none #ffffff;
		border-radius: 50px;
		height: auto;
	}
	.container::-webkit-scrollbar-track:hover {
		background: transparent;
	}
	.container::-webkit-scrollbar-track:active {
		background: transparent;
	}
	.container::-webkit-scrollbar-corner {
		background: transparent;
	}
	.todos__input {
		@apply w-2/3;
		background-color: inherit;
		border: none;
		box-shadow: none;
		text-decoration: none;
		font-size: 1.2rem;
		border-bottom: 1px solid var(--verde_oscuro);
		margin-top: 15px;
		outline: none;
	}
	.todos__button {
		background-color: inherit;
		border: none;
		box-shadow: none;
		font-size: 1.2rem;
		cursor: pointer;
	}
	.todo {
		@apply flex p-4 h-12 rounded-2xl w-10 text-lg font-extrabold;

		box-shadow: 0 0 15px rgb(12 82 59 / 20%);
		background-color: hsla(0, 0%, 100%, 0.2);
		color: var(--verde_oscuro);
		-webkit-backdrop-filter: blur(25px);
		backdrop-filter: blur(25px);
		width: inherit;
		margin-top: 15px;
		justify-content: space-between;
		align-items: center;
	}
	.icon__button {
		background-color: transparent;
		border: none;
		box-shadow: none;
		font-size: 1.2rem;
		cursor: pointer;
		color: rgba(0, 0, 0, 0.54);
	}

	.todo__checked--strike {
		text-decoration: line-through;
	}

	.titulo {
		@apply inline;
	}

	.addEvent {
		@apply float-right inline;
	}

	.addEventForm {
		@apply hidden absolute top-1/2 left-1/2 w-3/5 p-5 rounded-xl border-solid shadow-xl border-4;
		transform: translate(-50%, -50%);
		background-color: var(--verde_secundario);
		border-color: #376130;
	}
	.addEventForm div {
		@apply inline-block mx-2
	}

	label {
		color: var(--blanco_fondo)
	}
	
	input {
		@apply rounded-lg pl-2;
		background-color: var(--verde_fondos);
		color: var(--verde_primario);
	}

	.submit {
		@apply rounded-xl p-1 px-2;
		background-color: var(--verde_oscuro);
		font-family: var(--letra_titulo);
		color: var(--blanco_fondo);
	}

	.submit:hover {
		background-color: #0a4330;
	}

</style>
