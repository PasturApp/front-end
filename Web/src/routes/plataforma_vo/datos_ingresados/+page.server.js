/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const potreros = [
		{
			potrero: '1D',
			area: 3
		},
		{
			potrero: '1A',
			area: 6
		},
		{
			potrero: '2F',
			area: 4.5
		},
		{
			potrero: '1D',
			area: 3
		},
		{
			potrero: '1A',
			area: 6
		},
		{
			potrero: '2F',
			area: 4.5
		},
		{
			potrero: '1A',
			area: 6
		},
		{
			potrero: '2F',
			area: 4.5
		},
		{
			potrero: '1D',
			area: 3
		},
		{
			potrero: '1A',
			area: 6
		},
		{
			potrero: '2F',
			area: 4.5
		}
	];

	return { potreros };
}
