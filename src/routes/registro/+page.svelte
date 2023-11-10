<script>
	import { onMount } from 'svelte';
	// Función para manejar el evento del formulario

	async function registerUser(event) {
		event.preventDefault(); // Prevenir el envío del formulario por defecto

		const email = document.getElementById("email").value;
		const password = document.getElementById("pass").value;
		const confirm_password = document.getElementById("confirmar").value;
		const firstname = document.getElementById("nombre").value;
		const lastname = document.getElementById("apellido").value;
		const telephone = document.getElementById("celular").value;




		if (password == confirm_password) {
			const response = await fetch("http://127.0.0.1:5000/api/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",

			},
			body: JSON.stringify({ email, password, firstname, lastname, telephone}),
		})
		.then(response=> {
			if (!response.ok) {
				throw new Error("Not OK :(");
			}
			return response.json();
		})
		.then(data => {
			let jsonData = data;
			document.cookie = `uuid=${jsonData}`; // Might have to set Path=/ so that it persists through all pages and not just that specific url
			window.location.href = "http://localhost:5173/cuenta";
		})
		.catch(error => console.error('Error', error))
		;}}

		onMount(async () => {
			// Im gonna assume if you're registering you have no problem being logged out of prev session
			document.cookie = 'uuid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
		})
</script>

<div class="main">
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
				<label for="pass">Contraseña</label><br />
				<input type="password" id="pass" name="pass" placeholder="••••••••••" />
			</div>
			<div>
				<label for="confirmar">Confirmar Contraseña</label><br />
				<input type="password" id="confirmar" name="confirmar" placeholder="••••••••••" />
			</div>
			<div>
				<label for="celular">Celular</label><br />
				<input type="int" id="celular" name="celular" value="+598" />
			</div>
			<button type="submit" on:click={registerUser}>Registrarse</button>
		</form>
	</div>

	<footer class="wrapper">
		<p>¿Ya tienes una cuenta?</p>
		<a href="/inicio_sesion">Iniciar Sesión</a>
	</footer>
</div>

<style>
	.main {
		@apply min-h-screen w-full ml-20 p-2 grid place-items-center;
	}

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
