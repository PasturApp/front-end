<script>
	// Función para manejar el evento del formulario
	async function loginUser(event) {
		event.preventDefault(); // Prevenir el envío del formulario por defecto

		const email = document.getElementById("email").value;
		const password = document.getElementById("contraseña").value;

		try {
			const response = await fetch("/api/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			if (response.ok) {
				window.location.href = "http://localhost:5173/cuenta";
			} else {
				const errorMessage = await response.text();
				console.log("Error en el inicio de sesión:", errorMessage);

				// Limpiar los campos de texto si es necesario
				document.getElementById("email").value = "";
				document.getElementById("contraseña").value = "";
			}
		} catch (error) {
			console.error("Error en la solicitud:", error);
		}
	}
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
		<form on:submit={loginUser}>
			<div>
				<label for="email">Email</label><br />
				<input
					type="text"
					id="email"
					name="email"
					placeholder="email@ejemplo.com"
				/>
			</div>
			<div>
				<label for="contraseña">Contraseña</label><br />
				<input
					type="password"
					id="contraseña"
					name="contraseña"
					placeholder="••••••••••"
				/>
			</div>
			<button type="submit">Iniciar Sesión</button>
		</form>
	</div>

	<footer class="wrapper">
		<p>¿No tienes una cuenta?</p>
		<a href="/rol">Registrarse</a>
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
		@apply mt-4 flex flex-col gap-2 w-64 max-w-md;
	}

	button {
		@apply rounded-3xl border-none w-full h-6 font-semibold text-center cursor-pointer mt-4;
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
		@apply rounded-3xl border-none w-full h-6 pl-3 font-semibold;
		font-family: Montserrat;
		color: var(--verde_oscuro);
	}

	input:focus {
		outline-color: var(--verde_oscuro);
	}

	input[type="password"] {
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
