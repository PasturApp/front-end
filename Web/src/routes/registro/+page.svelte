<script>
</script>

<div class="wrapper">
	<div>
		<img
			type="image/png"
			alt="pasturapp logo"
			width="150"
			height="170"
			src="images/logoynombre.png"
		/>
	</div>
	<form>
		<div class="nombreApellido">
			<div>
				<label for="nombre">Nombre</label><br />
				<input type="text" id="nombre" name="nombre" placeholder="Betty" />
			</div>
			<div>
				<label for="email">Apellido</label><br />
				<input type="text" id="apellido" name="apellido" placeholder="Doomberton" />
			</div>
		</div>
		<div>
			<label for="email">Email</label><br />
			<input type="text" id="email" name="email" placeholder="email@ejemplo.com" />
		</div>
		<div>
			<label for="constraseña">Contraseña</label><br />
			<input type="password" id="constraseña" name="constraseña" placeholder="••••••••••" />
		</div>
		<div>
			<label for="confirmar">Confirmar Contraseña</label><br />
			<input type="password" id="confirmar" name="confirmar" placeholder="••••••••••" />
		</div>
		<div>
			<label for="celular">Celular</label><br />
			<input type="int" id="celular" name="celular" value="+598" />
		</div>
		<button type="submit">Registrarse</button>
	</form>
</div>

<footer class="wrapper">
	<p>¿Ya tienes una cuenta?</p>
	<a href="/inicio-sesion">Iniciar Sesión</a>
</footer>

<style>
	.wrapper {
		@apply flex justify-center items-center flex-col;
	}

	form {
		@apply mt-4 flex flex-col gap-2 max-w-xs;
	}

	.nombreApellido {
		@apply flex flex-row gap-2;
	}
	button {
		@apply rounded-2xl max-w-full h-6 text-center cursor-pointer mt-4;
		
		background-color: var(--verde_oscuro);
		color: var(--cremita);
	}

	button:hover {
		background-color: #0a4330;
	}

	p {
		color: var(--cremita);
	}

	a {
		text-decoration: none;
		color: var(--verde_oscuro);
	}

	a:hover {
		text-decoration: underline;
	}

	input {
		@apply rounded-3xl w-full h-6 pl-3 border-none font-semibold;
		color: var(--verde_oscuro);
		font-family: Montserrat;
		background-color: var(--verde_fondos);
	}

	input:focus {
		outline-color: var(--verde_oscuro);
	}

	input[type='password'] {
		font-size: 17px;
	}

	label {
		@apply text-sm pl-2 pb-0;
		color: var(--cremita);
	}

	::placeholder {
		color: 686868;
	}

	:global(body) {
		background-color: var(--verde_secundario) !important;
	}
</style>
