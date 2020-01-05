let books = []

let id = 0

module.exports = {
    read: function(req, res){
        res.status(200).json(books)
    },
    create: function(req, res){
        const { title, author } = req.body
        books.push( { id, title, author })
        id++

        res.status(201).json(books)
    },
    update: function(req, res){
        const { title, author } = req.body
        const { bookId } = req.params

        const bookIndex = books.findIndex(book => book.id === parseInt(bookId))
        books[booksIndex] = { title, author }

        res.status(200).json(books)
    },
    delete: function(req, res){
        const { bookId } = req.params
        const bookIndex = books.findIndex(book => book.id === parseInt(bookId))
        
        books.splice(bookIndex, 1)

        res.status(200).json(books)
    }
}