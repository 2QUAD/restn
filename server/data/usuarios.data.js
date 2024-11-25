const conndb = require('../infra/conndb');

exports.getUsers = async function () {
    return await conndb.any('SELECT * FROM restn.users');
};

exports.saveUsers = async function (user) {
    return await conndb.none('INSERT INTO restn.users (username, password, email) VALUES ($1, $2, $3)', [user.username, user.password, user.email]);
};

exports.deleteUsers = async function (id) {
    return await conndb.none('DELETE FROM restn.users WHERE id = $1', [id]);
};

exports.getUserByUsername = async function (username) {
    return await conndb.oneOrNone('SELECT * FROM restn.users WHERE username = $1', [username]);
};

exports.getUserByEmail = async function (email) {
    return await conndb.oneOrNone('SELECT * FROM restn.users WHERE email = $1', [email]);
};

exports.updateUser = async function (id, user) {
    return await conndb.none('UPDATE restn.users SET username=$1, password=$2, email=$3 WHERE id=$4', [user.username, user.password, user.email, id]);
};

