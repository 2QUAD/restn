const postsData = require('../data/posts.data');


exports.savePosts = async function (post) {
    return await postsData.savePosts(post);
};

exports.getPosts = async function () {
    return await postsData.getPosts();
};

exports.deletePosts = async function (id) {
    return await postsData.deletePosts(id);
};

