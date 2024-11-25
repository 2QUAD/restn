const usuarios = require('../data/usuarios.data');


exports.getUsers = async function () {
    return await usuarios.getUsers();
};

exports.saveUsers = async function (user) {
    return await usuarios.saveUsers(user);
};

exports.deleteUsers = async function (id) {
    return await usuarios.deleteUsers(id);
};

exports.getUserByUsername = async function (username) {
    return await usuarios.getUserByUsername(username);
};

exports.getUserByEmail = async function (email) {
    return await usuarios.getUserByEmail(email);
};

exports.updateUser = async function (id, user) {
    return await usuarios.updateUser(id, user);
};  