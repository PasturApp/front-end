<script>
	import Navbar from '../components/navbar.svelte';
</script>

<div>
	<h1>Tu cuenta</h1>
	<form>
		<div class="nombre">
			<label for="nombre">Nombre</label><br />
			<input type="text" id="nombre" name="nombre" />
		</div>

		<div class="apellido">
			<label for="apellido">Apellido</label><br />
			<input type="text" id="apellido" name="apellido" />
		</div>

		<div>
			<label for="email">Email</label><br />
			<input type="text" id="email" name="email" placeholder="email@ejemplo.com" />
		</div>

		<div>
			<label for="celular">Celular</label><br />
			<input type="int" id="celular" name="celular" value="+598" />
		</div>

		<button class="mod" type="submit">Modificar</button>

		<div>
			<label for="vinculo">Vincula a tu asesor </label><br />
			<div class="vincular">
				<input type="text" id="vinculo" name="vinculo" placeholder="www.pasturapp.com/23asf3ef" />
				<button class="copiar" type="submit">Copiar</button>
			</div>
		</div>

		<button class="sesion" id="sesion" type="submit"
			><a href="/inicio_sesion">Cerrar Sesión</a></button
		>
	</form>
</div>

<style lang="css">
	form {
		@apply mt-4 flex flex-col gap-2 max-w-xs;
	}

	button {
		@apply rounded-2xl max-w-full text-center cursor-pointer mt-2;

		background-color: var(--verde_secundario);
		font-family: var(--letra_titulo);
		color: var(--verde_fondos);
	}

	button:hover {
		background-color: #33582c;
	}

	input {
		@apply rounded-3xl pl-3 border-none font-semibold m-2 w-full;
		color: var(--verde_secundario);
		font-family: Montserrat;
		background-color: var(--verde_fondos);
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

	button.sesion {
		@apply rounded-2xl max-w-full h-12 mt-4 text-center text-xl font-semibold p-2;
		background-color: #ffa7a7;
		color: #ba3131;
	}

	button.copiar {
		@apply text-center p-1 text-xs mb-2;
	}

	.vincular {
		@apply flex flex-row;
	}

	.sesion a {
		font-family: var(--letra_titulo);
	}
</style>
