const express = require('express');
const bc = require('./controllers/bookController');

const app = express();

app.use(express.json());

app.get('/api/books', bc.read);

app.post('/api/books', bc.create);

app.put('/api/books/:id', bc.update)

const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});