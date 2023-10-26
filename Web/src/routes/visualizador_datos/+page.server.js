/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const plataform = [
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
  return { plataform };
};