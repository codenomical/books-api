require('dotenv').config();
const mongoose = require('mongoose');
const db = require('../models');

// connecting to the database.
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// the book objects array for our database test (acts as a backup as well).
const bookSeed = [
    {
        title: "The Shinobi Initiative",
        description: "The reality-bending adventures of a clandestine service agency in the year 2166",
        year: 2014,
        quantity: 10,
        imageURL: "/assets/shinobi-initiative.jpeg"
    }
]

// remember this deletes all books in the database
db.Book.deleteMany([])
    .then(() => {
        // this will seed the data back into the database
        return db.Book.insertMany(bookSeed);
    })
    .then(data => {
        console.log("Success!");
        process.exit(0)
    })
    .catch(err => {
        console.log('Failure!', err);
        process.exit(1);
    });
