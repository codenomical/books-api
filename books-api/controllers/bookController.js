const express = require('express');
const router = express.Router();
const db = require('../models');
const Book = require('../models/books');

router.get('/', async (req, res) => {
    try {
        const books = await db.Book.find([]);
        res.status(200).json(books);
    } 
    catch (err)
    {
        res.status(500).json({ error: err.message });
    } 
});

router.get('/:id', async (req, res) => {
    try {
        const book = await db.Book.findById(req.params.id);
        if (!book) throw new Error('no book found');
        res.status(200).json(book);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', (req, res) => {
    Book.create(req.body)
        .then(newBook => res.status(201).json(newBook))
        .catch(err => res.status(500).json({ error: err.message }));
});

router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body, { new: true})
    .then(updateBook => res.status(200).json(updatedBook))
    .catch(err => res.status(500).json({ error: err.message }));
});

router.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json({ message: 'Book deleted successfully'}))
    .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;