const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = mongoose.Schema({
    name:{type: String, required:true},
    nameAndPsword:{type: String, required: true},
    email:{type:String, default: null}
})

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', UserSchema)