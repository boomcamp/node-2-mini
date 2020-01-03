const express = require("express");
const bc = require("./controllers/booksController.js");
const app = express();

app.use(express.json());

const PORT = 3001;

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
