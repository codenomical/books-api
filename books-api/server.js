// Modules and Globals
const express = require('express');
const app = express();
const cors= require('cors');

// Controller and Routes
const bookRouter = require('./controllers/bookController');


app.get('/', function (req, res) {
    res.send("Hello World!")
});

app.get('/second', function (req, res) {
    res.send("My Second Page!")
});


// Middleware
app.use(express.json());
app.use('/books', bookRouter);
app.use(cors());

// Listen
app.listen(process.env.PORT, function () {
    console.log(`Server is running on port: ${process.env.PORT}`);
});