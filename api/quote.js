// api/quote.js

// calling the quote object which is a schema
var Quote = require('../models/quote');

// return all quotes in json form
module.exports.getAllQuotes = function(req, res) {  
    //
    Quote.findAll(function(err, quotes) {
        if (err) {
            res.send(err);
        }
        res.json({quotes: quotes});
    });
};

// save quote to mongodb
module.exports.addQuote = function(req,res) {  
    var quote = new Quote(req.body.quote);
    quote.save(function(err) {
        if (err) {
            res.send(err);

        }
        res.json({quote: quote});
    });
};