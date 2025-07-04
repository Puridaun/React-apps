const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.MYSQL_DB,
})

module.exports = pool;