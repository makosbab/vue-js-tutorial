//Inititalize ExpressJS

var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

const expressApp = express();

//Middleware
expressApp.use(bodyParser.json());
expressApp.use(cors());

//We put the routes in a different folder
//Route for posts
const posts = require('./routes/api/posts');

//Handle production

if(process.env.NODE_ENV === 'procuction'){

    app.use(express.static(__dirname + '/public/'));

    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;

expressApp.use('/api/posts', posts);

expressApp.listen(port, () => {
    console.log("Listening on port...");
});