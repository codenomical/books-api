// Modules and Globals
require('dotenv').config();
const mongoose = require('mongoose');

// Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Model and Export

module.exports.Book = require('./books')