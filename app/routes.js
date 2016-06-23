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
            quotes.addQuote(req,res);
        })
        .get(function(req,res) { 
            quotes.getAllQuotes(req,res);
            //console.log(req.body);
        });
        /*
            This tells Express to route quotes/quote_id on PUT requests to
            updateQuote and DELETE requests to deleteQuote. The :quote_id is 
            a param added to the route retrieved from req.params. We pass 
            that same parameter to the module. V
        */
        router.route('/quotes/:quote_id')
            .get(function(req,res){
                quotes.getAQuote(req,res,req.params.quote_id);
            })
            .put(function(req, res) { 
                quotes.updateQuote(req, res, req.params.quote_id); 
            })
            .delete(function(req, res) { 
                quotes.deleteQuote(req, res, req.params.quote_id); 
            });
        
        router.route('*').get(function(req, res) {
            // load our public/index.html file// to use sendFile need to set root path
            res.sendFile('/public/index.html', {root: '/home/ubuntu/workspace/meenserver/'}); 
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