/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const plataforma = [
		{
			fecha: '25/8/2023',
			potrero: '2A',
			estado: 'Pastoreo',
			pastoreo: 'Si',
			disponibilidad: 2470
		},
		{
			fecha: '25/8/2023',
			potrero: '5A',
			estado: 'Pastoreo',
			pastoreo: 'No',
			disponibilidad: 2434
		},
		{
			fecha: '31/9/2023',
			potrero: '2A',
			estado: 'Pastoreo',
			pastoreo: 'Si',
			disponibilidad: 2678
		}
	];

	const stock = [
		{
			fecha: '25/8/2023',
			disponibilidad: 2678
		},

		{
			fecha: '3/9/2023',
			disponibilidad: 2467
		},
		{
			fecha: '15/9/2023',
			disponibilidad: 2800
		}
	];

	const tasa_crecimiento = [
		{
			fecha: '25/8/2023',
			tc: 44
		},

		{
			fecha: '3/9/2023',
			tc: 56
		},
		{
			fecha: '15/9/2023',
			tc: 38
		}
	];
	return { plataforma, stock, tasa_crecimiento };
}
