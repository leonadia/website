const mongoose = require('mongoose');

const socialMedia = new Schema({link:String})

const profileSchema = mongoose.Schema({
    avatarPath:{type:String, default: null},
    bio: {type: String, default: null, max:100},
    social:{type: [socialMedia]},
    belongTo: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
})

module.exports = mongoose.model('Profile',profileSchema);