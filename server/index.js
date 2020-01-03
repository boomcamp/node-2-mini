const express = require("express");
const bc = require("./controllers/booksController.js");

const app = express();

// middleware
app.use(express.json());
// app.use(express.static(`${__dirname}/../build`))

app.get("/api/books", bc.read);
app.post("/api/books", bc.create);
app.put("/api/books/:bookId", bc.update);
app.delete("/api/books/:bookId", bc.delete);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.info(`Server listening on port ${PORT}`);
});

// Static files - in responce to dynamic data where its structures is but changing during the duration of the server's processes,
// express.static - Static files allows to send files back to a certain path
