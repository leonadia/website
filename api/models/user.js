const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = mongoose.Schema({
    nameAndPsword:{type: String, required: true},
    email:{type:String, required: true}
})

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', UserSchema)