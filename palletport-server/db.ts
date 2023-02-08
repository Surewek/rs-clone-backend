const Pool = require('pg').Pool;

export const pool = new Pool({
    'user': 'postgres',
    'password': 'palletenjoer',
    'host': 'localhost',
    'port': 5432,
    'database': 'palletport',
});