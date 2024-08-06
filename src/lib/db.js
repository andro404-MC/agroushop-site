import postgres from "postgres";

const sql = postgres(process.env.PQADRR);
await sql`CREATE TABLE IF NOT EXISTS article (
      id SERIAL PRIMARY KEY,
      name TEXT,
      price REAL,
      stock INTEGER,
      category TEXT,
      picurl TEXT,
      discrate INTEGER,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )`;

export default sql;
