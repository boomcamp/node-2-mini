const express = require("express");
const bc = require("./controllers/booksCrontroller");
const app = express();

app.use(express.json());

app.get("/api/books", bc.read);
app.post("/api/books", bc.create);
app.put("/api/books/:bookId", bc.update);

const PORT = 3001;

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
