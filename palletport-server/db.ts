import pg from 'pg';
const { Pool } = pg;

export const pool = new Pool({
    'user': 'postgres',
    'password': 'palletenjoer',
    'host': 'localhost',
    'port': 5432,
    'database': 'palletport',
});