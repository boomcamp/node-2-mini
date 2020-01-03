let books = [];
let id = 0;

module.exports = {
  read: (req, res) => {
    res.status(200).send(books);
  },
  create: (req, res) => {
    const { title, author } = req.body;
    let book = { id, title, author };

    books.push(book);
    id++;

    res.status(200).send(books);
  },
  update: (req, res) => {
    const bookToUpdate = books.find(book => Number(req.params.id) === book.id);
    if (bookToUpdate) {
      const { title, author } = req.body;

      Object.assign(bookToUpdate, {
        ...(title && { title }),
        ...(author && { author })
      });
    }
    res.status(200).send(books);
  },
  delete: (req, res) => {
    books.forEach((book, index) => {
      if (book.id === parseInt(req.params.id)) {
        books.splice(index, 1);
      }
    });
    res.status(200).send(books);
  }
};
