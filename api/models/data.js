const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Data',dataSchema);