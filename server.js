// server.js

// modules
var express         = require('express');  
var app             = express();
var bodyParser      = require('body-parser');
var mongoose        = require('mongoose');

// set our port
//var port = process.env.PORT || 8080;
var port = 8081;
// set up mongoose, 
mongoose.connect('mongodb://localhost:27017/RESTServer');

// set the static files location
// where the EMBER APP is
app.use(express.static(__dirname + '/public'));

// bodyParser middleware to allow different encodings to and
// from our node server
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes API
var router = express.Router();
app.use('/', router);
require('./app/routes')(app); // configure our routes

// startup our app at http://localhost:3000
console.log("listing on port ", port)
app.listen(port);


// expose app
exports = module.exports = app;

/*
    file structure 
    
    ├── api
    │   └── quote.js : logic to add/retrieve posts
    ├── app
    │   └── routes.js 
    ├── models
    │   └── quote.js
    ├── package.json
    ├── TestProject  : holds emberjs app and pub compiled ember app
    ├── public  
    └── server.js
*/