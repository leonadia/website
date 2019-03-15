const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    title: String,
    content: String,
    date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Data',dataSchema);