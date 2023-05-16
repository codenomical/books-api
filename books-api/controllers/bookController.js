const express = require('express');
const router = express.Router();
const db = require('../models');
const Book = require('../models/books');

// GET
router.get('/seed', (req, res) => {
    Book.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
      },
      {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
      },
      {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
      },
      {
        "title": "Wâˆ€RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
      }])
        .then(() => res.status(200).json({ message: 'Seed successful '}))
        .catch(err => res.status(400).json({ message: 'Seed unsuccessful', error: err.message }))
});


router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } 
    catch (err)
    {
        res.status(500).json({ error: err.message });
    } 
});

router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) throw new Error('no book found');
        res.status(200).json(book);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST
router.post('/', (req, res) => {
    Book.create(req.body)
        .then(newBook => res.status(201).json(newBook))
        .catch(err => res.status(500).json({ error: err.message }));
});

// PUT
router.put('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) throw new Error('No book found');
        const updateBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true});
        res.status(200).json(updateBook);
    } catch (err) {
        res.status(500).json({ error: err.message });

    }
});

// Delete
router.delete('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) throw new Error('No book found');
        await Book.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Book deleted successfully'});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;