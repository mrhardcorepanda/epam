var DB_HOST = process.env.DB_HOST;
var DB_USER = process.env.DB_USER;
var DB_PASS = process.env.DB_PASS;
var DB_PORT = process.env.DB_PORT;
const Pool = require('pg').Pool
const pool = new Pool({
    user: DB_USER,
    host: DB_HOST,
    port: DB_PORT,
    database: "starwars",
    password: DB_PASS
})

module.exports = pool