var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* Schema for Search Form Objects in DB */
var FeedbackFormSchema = new Schema({
    'message': String,
    'date': String,
    'userid': String
});

module.exports = mongoose.model('FeedbackForm', FeedbackFormSchema);
