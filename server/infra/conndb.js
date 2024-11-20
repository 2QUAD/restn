const pgp = require('pg-promise')();

const conndb = pgp({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: '19952032'
    // ssl: true

});

module.exports = conndb;