var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* Schema for Search Form Objects in DB */
var SearchFormSchema = new Schema({
    'fullname': String,
    'email': String,
    'qlearn': String,
    'qwhy': String,
    'qbackground': String,
    'qformat': String,
    'qbudget': String,
    'qdate': String,
    'completed': String
});

module.exports = mongoose.model('SearchForm', SearchFormSchema);
