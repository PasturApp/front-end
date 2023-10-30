/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const response = await fetch("http://localhost:5000/api/mediciones_pastureName")
  const dashboard = await response.json()

  console.log(dashboard)
  return { potreros: dashboard }
}