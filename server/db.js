const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
    user: "touyeexiong",
    password: '',
    host: 'localhost',
    port: 5432,
    database: 'todoapp'
})

module.exports = pool;