const express = require("express");
const bc = require("./controllers/booksController.js");

const app = express();

// middleware
app.use(express.json());

app.get("/api/books", bc.read);
app.post("/api/books", bc.create);
app.put("/api/books/:bookId", bc.update);
app.delete('/api/books/:bookId', bc.delete);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.info(`Server listening on port ${PORT}`);
});
