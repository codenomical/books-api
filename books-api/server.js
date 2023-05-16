const express = require('express');
const app = express();

const cors= require('cors');

const bookRouter = require('./controllers/bookController');

app.get('/', function (req, res) {
    res.send("Hello World!")
});

app.get('/second', function (req, res) {
    res.send("My Second Page!")
});

app.use(express.json());

app.use('/books', bookRouter);

app.use(cors());

app.listen(3000, function () {
    console.log("I am awake!")
});