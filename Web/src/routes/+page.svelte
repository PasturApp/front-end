<script>
	import './index.css';
	import Calendar from 'color-calendar';
	import 'color-calendar/dist/css/theme-basic.css';
	import 'color-calendar/dist/css/theme-glass.css';
	import { onMount } from 'svelte';
	import Icons from './icons.svelte';

	export let data;
	console.log(data);
	const establecimiento = data.dashboard[0];
	const plataforma = data.dashboard[1];
	onMount(() => {
		new Calendar({
			theme: 'glass',
			id: '#color-calendar',
			eventsData: myEvents,
			primaryColor: '#528A3F',
			headerColor: '#F5FFFA',
			headerBackgroundColor: '#3F6F37',
			weekdaysColor: '#0C523B'
		});
	});
	const myEvents = [
		{
			start: '2021-04-15T06:00:00',
			end: '2021-04-15T20:30:00',
			name: 'Event 1',
			url: 'https://www.cssscript.com',
			desc: 'Description 1'
			// more key value pairs here
		}
	];
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

		console.log(todoList);
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
			<div>
				<h1>Próximo evento</h1>
			</div>
			<div class="fecha">Fecha 8/11/23 15 hs</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.wrapper {
		@apply grid gap-3;
		grid-template-columns: 2fr 1fr;
	}

	.izquierda {
		@apply grid gap-1;
	}

	.datos {
		@apply grid gap-3;
		grid-row: 1/2;
	}

	.establecimiento {
		grid-column: 1/2;
	}

	h1 {
		@apply ml-2;
		font-family: var(--letra_titulo);
		color: var(--verde_oscuro);
	}

	.datos-lista,
	.lista div {
		@apply pl-8 rounded-xl;
		background-color: var(--verde_secundario);
	}

	.container div {
		@apply p-4;
		grid-row: 2/3;
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
		grid-column: 2/3;
	}

	.derecha {
		@apply grid gap-3;
	}

	.calendario {
		grid-row: 1/2;
	}

	.evento {
		grid-row: 2/3;
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
		@apply h-96;
		overflow-y: scroll;
	}

	.container::-webkit-scrollbar {
		width: 10px;
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
	}
	.container::-webkit-scrollbar-thumb:hover {
		background: var(--verde_primario);
	}
	.container::-webkit-scrollbar-thumb:active {
		background: var(--verde_secundario);
	}
	.container::-webkit-scrollbar-track {
		background: #666666;
		border: 0px none #ffffff;
		border-radius: 50px;
	}
	.container::-webkit-scrollbar-track:hover {
		background: #666666;
	}
	.container::-webkit-scrollbar-track:active {
		background: #333333;
	}
	.container::-webkit-scrollbar-corner {
		background: transparent;
	}
	.todos__input {
		background-color: inherit;
		border: none;
		box-shadow: none;
		text-decoration: none;
		font-size: 1.2rem;
		border-bottom: 1px solid black;
		margin-top: 15px;
		outline: none;
		width: 500px;
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
</style>
