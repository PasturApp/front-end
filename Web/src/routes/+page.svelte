<script>
	import './index.css';
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
						<li>Última actualización: Septiembre</li>
						<li>PV: 450</li>
						<li>Producción individual: 25 lt/VO</li>
						<li>Carga: 1.25 VO/sep</li>
					</ul>
				</div>
			</div>
			<div class="plataforma">
				<div>
					<h1>Plataforma de pastoreo</h1>
				</div>
				<div class="datos-lista">
					<ul>
						<li>Fecha: 25/09/2023</li>
						<li>TC: 40 kgMS/ha</li>
						<li>Stock: 2658 kgMS/ha</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="lista">
			<div>
				<h1>Lista de tareas</h1>
			</div>
		</div>
	</div>
	<div class="derecha">
		<div class="calendario">
			<h1>Calendario</h1>
		</div>
		<div class="evento">
			<div>
				<h1>Próximo evento</h1>
			</div>
			<div class="fecha">
				Fecha 8/11/23  15 hs
			</div>
		</div>
	</div>
</div>

<style lang="css">
	.wrapper {
		@apply grid gap-3;
		grid-template-columns: 2fr 1fr;
	}

	.izquierda {
		@apply grid gap-10;
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

	.datos-lista, .lista div {
		@apply p-6 pl-8 rounded-xl;
		background-color: var(--verde_secundario);
	}

	ul {
		@apply list-disc;
	}

	li {
		font-family: var(--letra_titulo);
		color: var(--blanco_fondo);
	}

	.plataforma {
		grid-column: 2/3;
	}

	.lista {
		grid-row: 2/3;
	}

	.lista h1 {
		@apply text-4xl;
		color: var(--blanco_fondo);
	}

	.derecha {
		@apply grid gap-3;
	}

	.calendario {
		grid-row: 1/2;
		background-color: blue;
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
</style>
