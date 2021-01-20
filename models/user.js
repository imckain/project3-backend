const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 6;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: String,
    isAdmin: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

userSchema.set('toJSON', {
    transform: function(doc, ret) {
        delete ret.password
        return ret;
    }
});

userSchema.pre('save', function(next) {
    const user = this;
    // Setting the admin field
    const isAdmin = user.email.split('@')[0] === 'admin';
    user.isAdmin = isAdmin;
    // hashing the password
    if(!user.isModified("password")) return next();
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
        if(err) return next(err);
        user.password = hash;
        next();
    });
});

userSchema.methods.comparePassword = function(tryPassword, callback) {
    bcrypt.compare(tryPassword, this.password, callback);
};

module.exports = mongoose.model('User', userSchema);