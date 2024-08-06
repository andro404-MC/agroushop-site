import sql from "$lib/db.js";

export async function load() {
  let articles =
    await sql`SELECT id,name,price,stock,category,picurl,discrate,created_at from article order by id desc`;

  return { articles: articles };
}
