<script>
	import Tabs from '../components/tabs.svelte';
	import Plataforma from '../components/plataforma.svelte';
	import Stock from '../components/stock.svelte';
	import Tasa_crecimiento from '../components/tasa_crecimiento.svelte';
	import { onMount } from "svelte";

	// tabs
	let items = ['Plataforma', 'Stock', 'Tasa de crecimiento'];
	let activeItem = 'Plataforma';
	let table_medi = []
	let table_stock = []
	let table_tc = []
	const tabChange = (e) => {
		activeItem = e.detail;
	};
	async function fetchData() {
		let uuidCookie = document.cookie
        .split('; ')
        .find(row => row.startsWith('uuid='))
        ?.split('=')[1];
    uuidCookie = uuidCookie ? uuidCookie.split(',')[0] : null;
	const urls = [
		`http://127.0.0.1:5000/api/user/${uuidCookie}/mediciones_table`,
		`http://127.0.0.1:5000/api/user/${uuidCookie}/stock_table`,
		`http://127.0.0.1:5000/api/user/${uuidCookie}/grafica_tc`
		];
    if (uuidCookie) {
		console.log(uuidCookie)
        try {
            const promises = urls.map(async (url) => {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Failed to fetch data from ${url}`);
                }
                const data = await response.json();
                return data;
            });
			const results = await Promise.all(promises);
			table_medi = results[0];
			table_stock = results[1]
			table_tc = results[2]
			console.log("graficas", table_medi);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    } else {
        // Handle the case when uuidCookie doesn't exist
        window.location.href = '/inicio_sesion';
    }
    }
	export let data;
	console.log(data.stock)
	onMount(async () => {
		await fetchData();
	});
</script>

<div class="wrapper">
	<Tabs {activeItem} {items} on:tabChange={tabChange} />
	<div class="table">
		{#if activeItem === 'Plataforma'}
			<Plataforma plataforma={table_medi} />
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
