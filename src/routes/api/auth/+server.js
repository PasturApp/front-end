import { json } from '@sveltejs/kit'

/** @type {import('./$types').RequestHandler} */
export async function GET({ cookies }) {

  const options = {
    maxAge: 24 * 60 * 7 * 7,
    httpOnly: true,
    secure: true,
    path: '/',
  }

  cookies.set("token", "test", options)

  return json({ success: "true" });
};

