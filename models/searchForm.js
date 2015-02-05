var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var searchFormSchema = new Schema({
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

module.exports = mongoose.model('SearchForm', searchFormSchema);
