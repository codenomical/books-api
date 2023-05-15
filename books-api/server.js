const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.send('Hello Homepage')
});

app.get('/second', function (req, res) {
    res.send('My Second Page!')
})

app.use(express.json());


app.listen(3000, function () {
    console.log('I am awake!')
});

