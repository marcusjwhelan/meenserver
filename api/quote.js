// api/quote.js

// calling the quote object which is a schema
var Quote = require('../models/quote');

// FIND all quotes in json form
module.exports.getAllQuotes = function(req, res) {  
    //
    Quote.find(function(err, quotes) {
        if (err) {
            res.send(err);
        }
        res.json({quotes: quotes});
    });
};
// FIND a quotes in json form
module.exports.getAQuote = function(req, res, id) {  
    Quote.findById(id, function(err, quotes) {
        if (err) {
            res.send(err);
        }
        res.json({quotes: quotes});
    });
};
// SAVE quote to mongodb
module.exports.addQuote = function(req,res) {  
    var quote = new Quote(req.body.quote);
    quote.save(function(err) {
        if (err) {
            res.send(err);
        }
        res.json({quote: quote});
    });
};
// UPDATE a quote
module.exports.updateQuote = function(req, res, id) {  
        Quote.findByIdAndUpdate(id, {
            "quote": req.body.quote,
            "author": req.body.author
        }, function(err, quote) {
            if (err) {
                res.send(err);
            };
            res.json({quote: quote});
        });
};
// DELETE a quote
module.exports.deleteQuote = function(req, res, id) {  
        Quote.findByIdAndRemove(id, function(err, quote) {
           if (err) {
                res.send(err);
           }
            res.json({quote: quote});
        });
};