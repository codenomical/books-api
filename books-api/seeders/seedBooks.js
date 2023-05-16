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
        imageURL: "https://imgur.com/LEqsHy5.jpeg"
    },
    {
        title: "Tess the Wonder Dog",
        description: "The tale of a dog who gets super powers",
        year: 2007,
        quantity: 3,
        imageURL: "https://imgur.com/cEJmGKV.jpg"
    },
    {
        title: "The Annals of Arathrae",
        description: "This anthology tells the intertwined narratives of six fairy tales.",
        year: 2016,
        quantity: 8,
        imageURL: "https://imgur.com/VGyUtrr.jpeg"
    },
    {
        title: "Wâˆ€RP",
        description: "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        year: 2010,
        quantity: 4,
        imageURL: "https://imgur.com/qYLKtPH.jpeg"
    }
]

// remember this deletes all books in the database
db.Book.deleteMany()
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
