const books = require('./controllers/booksController.js')
const express = require('express');
const app = express();

app.use(express.json())
app.use(express.static(__dirname + '/../build'));

const port = 3001;

app.get('/api/books', books.read)
app.post('/api/books', books.create)
app.put(`/api/books/:id`, books.update)
app.delete('/api/books/:id', books.delete)

app.listen(port, res => {
    console.log(`Listening to Port ${port}`)
})