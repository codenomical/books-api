const express = require('express');
const app = express();

const booksRouter = require('./controllers/booksController');

app.get('/', function (req, res) {
    res.send("Hello Homepage")
});

app.get('/second', function (req, res) {
    res.send("My Second Page!")
});

app.use(express.json());

app.use('/books', booksRouter);

app.listen(3000, function () {
    console.log("I am awake!")
});