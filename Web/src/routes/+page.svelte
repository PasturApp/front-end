<script>
	import './index.css';
	import Icons from './icons.svelte';

	export let data;
	const establecimiento = data.dashboard[0];
	const plataforma = data.dashboard[1];

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
	<section class="izquierda">
		<article class="establecimiento">
			<header>
				<h2>Datos del establecimiento</h2>
			</header>
			<div class="datos-resumen">
				<div class="recuadro">
					<h3>Fecha:</h3>
					{establecimiento.mes}
				</div>
				<div class="recuadro">
					<h3>Carga:</h3>
					<p>
						{establecimiento.carga} VO/haSEP
					</p>
				</div>
			</div>
		</article>
		<article class="produccion">
			<header>
				<h2>Datos de produccion</h2>
			</header>
			<div class="datos-resumen">
				<div class="recuadro">
					<h3>Producción individual:</h3>
					<p>{establecimiento.produccion} lt/VO</p>
				</div>
				<div class="recuadro">
					<h3>Productividad:</h3>
					<p>{establecimiento.productividad} lt/ha/mes</p>
				</div>
			</div>
		</article>
		<article class="plataforma">
			<div>
				<h2>Plataforma de pastoreo</h2>
			</div>
			<div class="datos-resumen">
				<div class="recuadro">
					<h3>Oferta:</h3>
					<p>{plataforma.tc} kgMS/ha/d</p>
				</div>
				<div class="recuadro">
					<h3>Demanda</h3>
					<p>{plataforma.demanda} kgMS/ha/d</p>
				</div>
			</div>
		</article>
	</section>

	<section class="centro"><img src="images/logoynombre.png" alt="" /></section>

	<section class="derecha">
		<header>
			<h1>Lista de tareas</h1>
		</header>
		<div class="container">
			<div>
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
	</section>
</div>

<style lang="postcss">
	.wrapper {
		@apply mt-14 w-full md:mt-0 md:w-3/4 lg:w-full lg:grid lg:gap-3;
		grid-template-columns: 1fr 1fr 1fr;
	}

	.izquierda {
		@apply lg:grid lg:gap-1 lg:col-start-1 lg:col-end-2;
	}

	.centro {
		@apply lg:col-start-2 lg:col-end-3;
	}

	.derecha {
		@apply lg:col-start-3 lg:col-end-4;
	}
	h1 {
		@apply text-4xl;
		font-family: var(--letra_titulo);
		color: var(--verde_oscuro);
	}

	h2 {
		@apply ml-2;
		font-family: var(--letra_titulo);
		color: var(--verde_oscuro);
	}

	h3 {
		@apply ml-2 text-xs;
		font-family: var(--letra_titulo);
		color: var(--verde_fondos);
	}

	.datos-resumen {
		@apply flex flex-row text-xl items-center justify-around text-center rounded-xl p-6;
		background-color: var(--verde_secundario);
		color: var(--verde_fondos);
		font-family: var(--letra_titulo);
	}

	.recuadro {
		@apply p-4;
		border-radius: 60px;
		background: linear-gradient(145deg, #356c36, #3f8040);
		box-shadow: 8px 8px 30px #377038, -8px -8px 39px #3f8040;
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
		@apply w-3/4;
		background-color: inherit;
		border: none;
		box-shadow: none;
		text-decoration: none;
		font-size: 1.2rem;
		border-bottom: 1px solid var(--verde_oscuro);
		margin-top: 15px;
		outline: none;
		color: var(--verde_oscuro);
	}
	.todos__button {
		background-color: inherit;
		border: none;
		box-shadow: none;
		font-size: 1.2rem;
		cursor: pointer;
	}
	.todo {
		@apply flex p-4 h-12 rounded-2xl w-10 text-lg font-extrabold shadow-md;
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
