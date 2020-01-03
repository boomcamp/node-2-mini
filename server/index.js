const express = require("express");
const bc = require("./controllers/booksController.js");
const app = express();

app.use(express.json());

app.get("/api/books", bc.read);

const PORT = 3001;

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
