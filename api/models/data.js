const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    status: {type: String, default: "natural"},
    date: { type: Date, default: Date.now },
    top: {type: Boolean, default: false},
    imagePath: { type: String},
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
})

module.exports = mongoose.model('Data',dataSchema);