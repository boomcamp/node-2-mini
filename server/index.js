const express = require("express");
const bookCont = require("./controller/bookControllers.js");

const app = express();

//middleware
app.use(express.json());
app.use(express.static(`${__dirname}/../build`));

app.get("/api/books", bookCont.read);
app.post("/api/books", bookCont.create);
app.put("/api/books/:id", bookCont.update);
app.delete("/api/books/:id", bookCont.delete);

const port = 3002;

app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});
