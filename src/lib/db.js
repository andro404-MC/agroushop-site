import { SECRET_PQ_ADRR } from "$env/static/private";
import postgres from "postgres";

const sql = postgres(SECRET_PQ_ADRR);

export default sql;
