const axios = require('axios');
const crypto = require('crypto');
const postsService = require('../service/posts.Service');


const generateRandomString = function (length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

test.only('Should return all posts', async function () {
   const post1 = postsService.savePosts({title: generateRandomString(), content: generateRandomString()});
   const post2 = postsService.savePosts({title: generateRandomString(), content: generateRandomString()});
   const post3 = postsService.savePosts({title: generateRandomString(), content: generateRandomString()});
       


   postsService.savePosts({title: 'title', content: 'content'});

    const response = await axios({
        url: 'http://localhost:3000/posts',
        method: 'get'
        
    });

    const posts = response.data;

    await postsService.deletePosts(posts[0].id);
    await postsService.deletePosts(posts[1].id);
    await postsService.deletePosts(posts[2].id);
});