<script>
	let isChecked = false;

	function toggleCheckbox() {
		isChecked = !isChecked;
	}

	const opciones = [
		{
			name: 'Inicio',
			link: '/'
		},
		{
			name: 'Mediciones',
			link: '/mediciones'
		},
		{
			name: 'Plataforma VO',
			link: '/plataforma_vo'
		},
		{
			name: 'Datos del establecimiento',
			link: '/datos_establecimiento'
		},
		{
			name: 'Cuenta',
			link: '/cuenta'
		}
	];
</script>

<input type="checkbox" id="active" bind:checked={isChecked} />
<label for="active" class="menu-button">
	<img src="../images/menu.png" width="30px" height="30px" alt="boton de menu" />
</label>
<div class="wrapper">
	<ul class="menu">
		{#each opciones as { name, link }}
			<li><a href={link} on:click={toggleCheckbox}>{name}</a></li>
		{/each}
	</ul>
</div>

<style lang="css">
	.wrapper {
		@apply fixed top-0 left-0 h-full w-full;
		@apply md:hidden;
		background: var(--verde_primario);
		clip-path: circle(25px at calc(100% - 45px) 45px);
		transition: all 0.3s ease-in-out;
	}

	#active:checked ~ .wrapper {
		clip-path: circle(75%);
	}

	.menu-button {
		@apply absolute right-5 top-8 text-center h-10 w-10;
		z-index: 2;
		line-height: 50px;
		transition: all 0.3s ease;
	}

	.wrapper ul {
		@apply text-center absolute top-1/2 left-1/2;
		transform: translate(-50%, -50%);
	}

	.wrapper ul li {
		@apply my-4;
	}

	.wrapper ul li a {
		@apply text-xl;
		color: var(--blanco_fondo);
	}

	.wrapper ul li a:hover {
		color: var(--verde_secundario);
	}

	label {
		@apply md:hidden;
	}

	input {
		@apply hidden;
	}
</style>
