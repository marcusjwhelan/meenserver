// models/quote.js

var mongoose = require('mongoose');  
var Schema = mongoose.Schema;

var QuoteSchema = new Schema({
    quote: String,
    author: String
});


module.exports = mongoose.model('Quote', QuoteSchema);