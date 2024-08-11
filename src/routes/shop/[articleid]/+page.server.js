import sql from "$lib/db.js";
import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const articleId = parseInt(params.articleid, 10);

  if (!isNaN(articleId)) {
    let article =
      await sql`SELECT id,name,price,stock,category,picurl,discrate,description,created_at
                FROM article
                WHERE id=${articleId}`;

    if (article[0]) {
      return article[0];
    } else {
      error(404, `article with id of ${params.articleid} was NOT found.`);
    }
  } else {
    error(400, `"${params.articleid}" is NOT a valid ID.`);
  }
}
