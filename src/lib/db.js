import postgres from 'postgres';

const sql = postgres(process.env.PQADRR);

export default sql;
