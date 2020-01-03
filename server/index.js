// require express
const express = require('express');

// book's controller
const bc = require('./controllers/booksController.js')

const app = express();

// middleware
app.use(express.json())
app.use(express.static(`${__dirname}/../build`))

// routes
app.get('/api/books', bc.read)
app.post('/api/books', bc.create)
app.put('/api/books/:bookId', bc.update)
app.delete('/api/books/:bookId', bc.delete)

const PORT = 3001
app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})