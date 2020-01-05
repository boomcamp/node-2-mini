const express = require('express')
const bookController = require('./controllers/bookController')

const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/../build'))

app.get('/api/books', bookController.read)

app.post('/api/books', bookController.create)

app.put('/api/books/:bookId', bookController.update)

app.delete('/api/books/:bookId', bookController.delete)

const PORT = 3001

app.listen(PORT,() => {
    console.log(`Server is listening to ${PORT}`)
})