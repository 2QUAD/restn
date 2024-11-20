const express = require('express');
const router = express.Router();
const service = require('../service/posts.Service');


router.get('/posts', async function (req, res) {
    const posts = await service.getPosts();
    res.json(posts);
});

router.post('/users', async function (req, res) {
    const users = await service.getUsers();
    res.json(users);
});

router,get('/posts/:id', async function (req, res) {
    const post = await service.getPosts();
    res.json(post);
});

router.get('/users', async function (req, res) {
    const users = await service.getUsers();
    res.json(users);
});

router.get('users/:id');
router.post('users');
router.get('/posts/:id');
router.post('/posts/:id');
router.put('/posts/:id');
router.delete('/posts/:id');

module.exports = router;