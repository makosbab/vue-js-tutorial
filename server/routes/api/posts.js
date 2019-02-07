//Setting up the route
const express = require("express");
const mongoDb = require("mongodb");

const router = express.Router();

//Get posts
// /api/posts by usign just /
router.get('/', (req, res) => {
    res.send('Hello!');
})

//Funtion to connect to 'posts' collection

async function loadPostsCollection(){

    //Handling async data and promises
    const client = await mongoDb.MongoClient.connect(
        'mongodb://nudlicica:86diosGuba@ds135946.mlab.com:35946/posts' ,
        {
            useNewUrlParser: true
        }
    );

    return client.db('posts').collection('posts');
}

module.exports = router;

