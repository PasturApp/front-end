<script>
	import Tabs from '../components/tabs.svelte';
	import Plataforma from '../components/plataforma.svelte';
	import Stock from '../components/stock.svelte';
	import Tasa_crecimiento from '../components/tasa_crecimiento.svelte';

	// tabs
	let items = ['Plataforma', 'Stock', 'Tasa de crecimiento'];
	let activeItem = 'Plataforma';
	const tabChange = (e) => {
		activeItem = e.detail;
	};

	export let data;
</script>

<div class="wrapper">
	<Tabs {activeItem} {items} on:tabChange={tabChange} />
	<div class="table">
		{#if activeItem === 'Plataforma'}
			<Plataforma plataforma={data.plataforma} />
		{:else if activeItem === 'Stock'}
			<Stock stock={data.stock} />
		{:else if activeItem === 'Tasa de crecimiento'}
			<Tasa_crecimiento tasa_crecimiento={data.tasa_crecimiento} />
		{/if}
	</div>
</div>

<style lang="css">
	.wrapper {
		@apply flex flex-col items-center justify-center;
	}
	.table {
		@apply flex items-center justify-center overflow-y-scroll h-60;
	}
	.table::-webkit-scrollbar {
		width: 12px;
		height: 115px;
	}
	.table::-webkit-scrollbar-button {
		width: 0px;
		height: 0px;
	}
	.table::-webkit-scrollbar-thumb {
		background: var(--verde_oscuro);
		border: 0px none #ffffff;
		border-radius: 50px;
		height: auto;
	}
	.table::-webkit-scrollbar-thumb:hover {
		background: var(--verde_primario);
	}
	.table::-webkit-scrollbar-thumb:active {
		background: var(--verde_secundario);
	}
	.table::-webkit-scrollbar-track {
		background: transparent;
		border: 0px none #ffffff;
		border-radius: 50px;
		height: auto;
	}
	.table::-webkit-scrollbar-track:hover {
		background: transparent;
	}
	.table::-webkit-scrollbar-track:active {
		background: transparent;
	}
	.table::-webkit-scrollbar-corner {
		background: transparent;
	}
</style>
