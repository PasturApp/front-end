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

<Tabs {activeItem} {items} on:tabChange={tabChange} />

{#if activeItem === 'Plataforma'}
	<Plataforma plataforma={data.plataform} />
{:else if activeItem === 'Stock'}
	<Stock />
{:else if activeItem === 'Tasa de crecimiento'}
	<Tasa_crecimiento />
{/if}
