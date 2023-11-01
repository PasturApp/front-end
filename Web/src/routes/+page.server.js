/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const endpoints = [
    "http://localhost:5000/api/dashboard_estable",
    "http://localhost:5000/api/dashboard_plat"
  ]
  const requests = endpoints.map(endpoint => fetchData(endpoint));
  const [dashboardEstable, dashboardPlat] = await Promise.all(requests);

  console.log("Dashboard Estable:", dashboardEstable);
  console.log("Dashboard Plat:", dashboardPlat);

  return { dashboardEstable, dashboardPlat };
}

async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`DATA GET ERROR: ${response.status} ${response.statusText}`);
  }
  return response.json();
}