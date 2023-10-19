<script>
	import './index.css';
</script>

<div class="wrapper">
	<div class="izquierda">
		<div class="datos">
			<div class="establecimiento">
				<h1>Datos del establecimiento</h1>
			</div>
			<div class="plataforma">
				<h1>Plataforma de pastoreo</h1>
			</div>
		</div>
		<div class="lista">
			<h1>Lista de tareas</h1>
		</div>
	</div>
	<div class="derecha">
		<div class="calendario">
			<h1>Calendario</h1>
		</div>
		<div class="evento">
			<h1>Evento</h1>
		</div>
	</div>
</div>

<style lang="css">
	.wrapper {
		@apply grid gap-3;
		grid-template-columns: 2fr 1fr;
	}

	.izquierda {
		@apply grid gap-3;
	}
	.datos {
		@apply grid gap-3;
		grid-row: 1/2;
	}

	.establecimiento {
		grid-column: 1/2;
		background-color: green;
	}

	.plataforma {
		grid-column: 2/3;
		background-color: cadetblue;
	}

	.lista {
		background-color: aqua;
		grid-row: 2/3;
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
		background-color: brown;
	}
</style>
