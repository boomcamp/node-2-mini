const express = require("express");
const bc = require("./controllers/booksController.js");

const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/../build"));

app.get("/api/books", bc.read);
app.post("/api/books", bc.create);
app.post("/api/books", bc.update);
app.delete("/api/books", bc.delete);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
