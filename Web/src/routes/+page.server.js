/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const dashboard = [{
    mes: 'Septiembre',
    vacas: 150,
    pv: 450,
    produccion: 25,
    carga: 1.25,
    productividad: 953
  },
  {
    fecha: "24/4/2023",
    tc: 40,
    demanda: 35,
    stock: 2600
  }]
  return { dashboard }
}
