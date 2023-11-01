/** @type {import('./$types').PageServerLoad} */
export async function load() {
	try {
		const response = await fetch("http://localhost:5000/api/pasture_table");
		const potreros = await response.json();
		console.log(potreros);
		return { potreros };
	} catch (error) {
		console.error('Error fetching data:', error);
		return { potreros };
	}
}
