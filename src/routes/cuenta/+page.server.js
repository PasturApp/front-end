/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const usuario = {
    nombre: 'Betty',
    apellido: 'Doomberton',
    email: 'bettydoomberton@gmail.com',
    celular: 92440636
  };
  return { usuario };
};