const express = require('express');
const router = express.Router();
const db = require('../models');

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

module.exports = router;