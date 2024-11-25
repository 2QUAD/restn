const pgp = require('pg-promise')();

const conndb = pgp({
    host: 'localhost',
    port: 5433,
    database: 'restn',
    user: 'restn',
    password: '19952302'
    // ssl: true

});

module.exports = conndb;