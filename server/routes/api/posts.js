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


//Add post
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        text: req.body.text, //body-parser
        createdAt: new Date()
    });
    //Return an HTTP response, 201 meaning OK and something was created
    res.status(201).send();
});


//Delete request with specific ID
// slash colon represents the ID
router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    //Special field (ID), Object ID wrapper should be used
    await posts.deleteOne({

        _id : new mongoDb.ObjectID(req.params.id)
    });
    res.status(200).send();
});


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

