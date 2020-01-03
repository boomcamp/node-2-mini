let books = [];
let id = 0;

module.exports = {
  read: (req, res) => {
    res.status(200).send(books);
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
    const bookToUpdate = books.find(book => Number(req.params.id) === book.id);
    if (bookToUpdate) {
      const { title, author } = req.body;

      Object.assign(bookToUpdate, {
        ...(title && { title }), // conditionally applies if title is defined
        ...(author && { author }) // conditionally applies if author is defined
      });
      return res.status(200).send(books);
    }
    return res.status(404).send({ error: "Could not find specified book." });
  },
  delete: (req, res) => {
    const bookIndex = books.findIndex(
      book => Number(req.params.id) === book.id
    );
    if (req.params.id > -1) {
      books.splice(bookIndex, 1);
      return res.status(200).send(books);
    }

    return res.status(404).send({ error: "Could not find specified book." });
  }
};
