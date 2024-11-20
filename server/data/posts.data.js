const conndb = require('../infra/conndb');




exports.getPosts = async function () {
    return await conndb.any('SELECT * FROM restn.posts');
};


exports.savePosts = async function (post) {
    return await conndb.none('INSERT INTO restn.posts (title, content) VALUES ($1, $2)', [post.title, post.content]);
    
};

exports.deletePosts = async function (id) {
    return await conndb.none('DELETE FROM restn.posts WHERE id = $1', [id]);    
};
