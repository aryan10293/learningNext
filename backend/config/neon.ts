import * as dotenv from "dotenv";
import pkg from 'pg';
dotenv.config({ path: "./config/.env" });
const { Pool } = pkg;
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: false ,
});
export default pool;