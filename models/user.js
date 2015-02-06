var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

/* Schema for User Objects in DB */
var UserSchema = new Schema({
    'firstname': String,
    'lastname': String,
    'email': String,
    'password': String
});

UserSchema.methods.toJSON = function() {
    var user = this.toObject();
    delete user.password;

    return user;
};

module.exports = mongoose.model('User', UserSchema);

/* Salt password prior to saving in DB */
UserSchema.pre('save', function(next) {
    var user = this;

    if(!user.isModified('password')) return next();

    bcrypt.genSalt(10, function(err, salt) {
        if(err) return next(err);

        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if(err) return next(err);

            user.password = hash;
            next();
        });
    });
});