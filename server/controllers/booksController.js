let books = [];

let id = 0;

module.exports = {
    read: (req, res) => {
        res.status(200).send(books);
    },
    create: (req, res) => {
        const { title, author } = req.body;
        let book = {
            id, title, author
        };
        books.push(book);
        id++;
        res.status(200).send(books)
    },
    update: (req, res) => {
        const bookToUpdate = books.find(book => Number(req.params.id) === book.id);
        if (bookToUpdate) {
          const { title, author } = req.body;
    
          Object.assign(bookToUpdate, {
            ...(title && { title }),
            ...(author && { author }),
          });
          return res.status(200).send(books);
        }
        return res.status(404).send({ error: 'Could not find specified book.' });
    },
    delete: (req, res) =>{
        const bookToDelete = books.find(book => Number(req.params.id) === book.id);
        if(id > -1) {
            books.splice(bookToDelete, 1)
            return res.status(200).send(books);
        }
        return res.status(404).send({ error: 'Could not delete specified book.' });
    }
}
