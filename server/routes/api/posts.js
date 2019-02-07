//Setting up the route
const express = require("express");
const mongoDb = require("mongodb");

const router = express.Router();

//Get posts
// /api/posts by usign just /
router.get('/', async (req, res) => {
    //res.send('Hello!');
    const posts = await loadPostsCollection();

    //sending a find to the database
    res.send(await posts.find({}).toArray()); //empty array because of find({})
}) 

//Funtion to connect to 'posts' collection
// function in a route to do methods on it
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

