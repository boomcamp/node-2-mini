let books = [];
let id = 0;

module.exports = {
  read: (req, res) => {
    res.status(200).json(books);
  },
  create: (req, res) => {
    const { title, author } = req.body;
    let book = {
      id,
      title,
      author
    };
    books.push(book);
    id++;
    res.status(200).send(books);
  },
  update: (req, res) => {
    const { title, author } = req.body;
    const { bookId } = req.params;

    const bookIndex = books.findIndex(book => book.id === parseInt(bookId));
    books[bookIndex] = { title, author };

    res.status(200).json(books);
  },
  delete: (req, res) => {
    const { bookId } = req.params;

    const bookIndex = books.findIndex(book => book.id === parseInt(bookId));

    books.splice(bookIndex, 1);

    res.status(200).json(books);
  }
};
