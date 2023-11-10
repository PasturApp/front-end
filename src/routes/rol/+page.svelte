<script>
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
		<h3>Seleccione su rol:</h3>
		<div class="botones">
			<button type="button" onclick="location.href='/registro'">Productor</button>
			<button type="button">Asesor</button>
		</div>
	</div>
</div>

<style>
	.wrapper {
		@apply flex justify-items-center items-center flex-col max-w-screen-sm;
	}

	.main {
		@apply min-h-screen w-full ml-20 p-2 grid place-items-center;
	}

	.botones {
		@apply flex flex-row gap-4;
	}

	h3 {
		padding-top: 1.5rem;
		color: var(--cremita);
	}

	button {
		@apply border-none rounded-3xl w-28 h-6 text-center mt-4 cursor-pointer;
		background-color: var(--verde_oscuro);
		color: var(--cremita);
	}

	button:hover {
		background-color: #0a4330;
	}

	:global(body) {
		background-color: var(--verde_secundario) !important;
	}
</style>
