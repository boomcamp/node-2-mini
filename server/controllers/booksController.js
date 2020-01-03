let books = [];
let id = 0;

module.exports = {
  read: (req, res) => {
    res.status(200).json(books);
  },
  create: (req, res) => {
    const { title, author } = req.body;
    books.push({id, title, author});
    id++;
    res.status(201).json(books);
  },
  update: (req, res) => {
    const bookToUpdate = books.find(book => Number(req.params.bookID) === book.id);
    if (bookToUpdate) {
      const { title, author } = req.body;

      Object.assign(bookToUpdate, {
        ...(title && { title }),
        ...(author && { author }),
      });
      return res.status(200).json(books);
    }
    return res.status(404).send({ error: 'Could not find specified book.' });
  },
  delete: (req, res) => {
    const { bookID } = req.params;
    const bookIndex = books.findIndex(
      book => Number(bookID) === book.id
    );
    if ( bookID > -1) {
      books.splice(bookIndex, 1);
      return res.status(200).json(books);
    }

    return res.status(404).send({ error: 'Could not find specified book.' });
  },
};