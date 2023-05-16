const mongoose = require('mongoose');

// Schema
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    year: { type: Number, required: true },
    quantity: { type: Number, required: true },
    imageURL: { type: String, required: true },
})

// Module and export

module.exports = mongoose.model('Books', bookSchema);