// app/routes.js
/*
    This is fairly straight forward. We are telling Express
    that all routes will be sent to our public/index.html file. 
    This file will be our Ember application.
*/
 var quotes = require('../api/quote');
 
 module.exports = function(router) {


        router.route('/quotes')
        .post(function(req, res) { 
            console.log(req.body); 
            quotes.addQuote(req,res); 
        })
        .get(function(req,res) { 
            quotes.getAllQuotes(req,res); 
        });
        
        router.route('*').get(function(req, res) {
            // load our public/index.html file
            res.sendfile('./public/index.html'); 
        });

};

/*
    Oder router for making just a simple Node ember app
     module.exports = function(app) {
        app.get('*', function(req, res) {
            res.sendfile('./public/index.html'); // load our public/index.html file
        });
};
*/