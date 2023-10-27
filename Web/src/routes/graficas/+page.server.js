/** @type {import('./$types').PageServerLoad} */
export async function load() {
	// const res = await fetch("...")
	// const data = await res.json()

	const data = [
		{
			labels: ['Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'],
			datasets: [
				{
					label: 'Stock',
					data: [2750, 2300, 2650, 2500, 2700]
				}
			]
		},
		{
			labels: ['1A', '3E', '3F', '6D', '6A', '4A'],
			datasets: [
				{
					label: 'Potreros',
					data: [3680, 3500, 2800, 2750, 2200, 1800],
					borderWidth: 1,
					backgroundColor: ['#0C523B'],
				}
			]
		},
		{
			labels: ['Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'],
			datasets: [
				{
					label: 'Tasa de crecimiento',
					data: [30, 50, 45, 58, 45]
				}
			]
		},
		{
			labels: ['Pastoreo', 'Reserva', 'Barbecho'],
			datasets: [
				{
					label: 'Area',
					data: [40, 15, 5],
					borderWidth: 1,
					backgroundColor: ['#0C523B', '#528A3F', '#D3D8BD']
				}
			]
		}
	];
	// data[0] -> stock data, labels
	// data[1] -> pastoreo data, labels
	// data[2] -> suelo data, labels
	// data[3] -> tasa de crecimiento data, labels

	const charts = [
		{
			title: 'Stock',
			canvaId: 'Stock',
			type: 'line',
			data: {
				...data[0],
				datasets: [
					{
						...data[0].datasets[0],
						borderColor: '#0C523B',
						backgroundColor: '#0C523B',
						tension: 0.35
					},
					{
						label: 'Rango obj. min',
						data: [2750, 2750, 2750, 2750, 2750],
						borderColor: '#CFE7D1',
						backgroundColor: '#CFE7D1',
						pointRadius: 0,
						fill: 1
					},
					{
						label: 'Rango obj. max',
						data: [2250, 2250, 2250, 2250, 2250],
						borderColor: '#CFE7D1',
						backgroundColor: '#CFE7D1',
						pointRadius: 0,
						fill: 1
					}
				]
			},
			options: {
				scales: {
					y: {
						grid: {
							display: false
						},
						title: {
							display: true,
							text: 'kgMS/ha'
						},
						min: 0,
						max: 3500
					},
					x: {
						grid: {
							display: false
						}
					}
				},
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: {
						display: true,
						position: 'bottom',
					},
				}
			}
		},
		{
			title: 'Pastoreo',
			canvaId: 'Pastoreo',
			type: 'bar',
			data: {
				...data[1],
				datasets: [
					{
						...data[1].datasets[0],
						borderWidth: 1
					}
				]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false
			}
		},
		{
			title: 'Tasa de crecimiento',
			canvaId: 'Tasa de crecimiento',
			type: 'line',
			data: {
				...data[2],
				datasets: [
					{
						...data[2].datasets[0],
						borderColor: '#0C523B',
						backgroundColor: '#0C523B',
						tension: 0.35
					}
				]
			},
			options: {
				scales: {
					y: {
						grid: {
							display: false
						},
						title: {
							display: true,
							text: 'kgMS/ha'
						},
						min: 0,
						max: 120
					},
					x: {
						grid: {
							display: false
						}
					}
				},
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: {
						display: true,
						position: 'bottom',
					}
				}
			}
		},
		{
			title: 'Uso del suelo',
			canvaId: 'Uso del suelo',
			type: 'pie',
			data: {
				...data[3],
				datasets: [
					{
						...data[3].datasets[0],
						borderWidth: 1,
						backgroundColor: ['#0C523B', '#528A3F', '#D3D8BD']
					}
				]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: {
						display: true,
						position: 'bottom'
					}
				}
			}
		}
	];

	charts[0].data.datasets[1].legend = {
		display: false, // Hide the legend for Dataset 2
	};


	return {
		charts
	};
}
