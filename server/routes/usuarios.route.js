const express = require('express');
const router = express.Router();
const service = require('../service/usuarios.services');

router.get('/users', async function () {
    const users = await service.getUsers();
    res.json(users);
});

router.get('/users/:id', async function (req, res) {
    const user = await service.getUsers();
    res.json(user);
});

router.post('/users', async function (req, res) {
    const user = await service.saveUsers(req.body);
    res.json(user);
});

router.put('/users/:id', async function (req, res) {
    const user = await service.updateUser(req.params.id, req.body);
    res.json(user);
});

router.delete('/users/:id', async function (req, res) {
    const user = await service.deleteUsers(req.params.id);
    res.json(user);
});

router.get('/users/:id');
router.post('/users/:id');
router.put('/users/:id');
router.delete('/users/:id');

module.exports = router;