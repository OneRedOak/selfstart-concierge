var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

/* Schema for User Objects in DB */
var UserSchema = new Schema({
    fullname: String,
    email: String,
    password: String,
    query: String,
    qlearn: String,
    qwhy: String,
    qbackground: String,
    qformat: String,
    qbudget: String,
    qdate: String,
    rlink: String,
    rstatus: Boolean
});

UserSchema.methods.toJSON = function() {
    var user = this.toObject();
    delete user.password;

    return user;
};

/* Decrypts and compares submitted password to account password */
UserSchema.methods.comparePasswords = function(password, callback) {
    bcrypt.compare(password, this.password, callback);
};

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

module.exports = mongoose.model('User', UserSchema);
