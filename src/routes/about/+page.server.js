import sql from '$lib/db.js';

export async function load() {
	await sql`CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name TEXT,
      age TEXT
    )`;
	let users = await sql`SELECT id,name,age from users`;

	// console.log(users);

	return { users: users };
}
