# Project Summary

In this project, we will create a node server that will act as a bookshelf. This
server will keep track of books by being able to add books to a collection, read
from the collection, update the collection, and delete from the collection.
We'll use [insomnia](https://insomnia.rest/) to test our endpoints.

## Setup

- `Fork` this repository.
- `Clone` your `fork`.

## Step 1

### Summary

In this step, we will create a package.json to keep track of our server's
dependencies.

### Instructions

- Run

```sh
npm init -y
```

## Step 2

### Summary

In this step, we will install `express`, which is a very common package node
developers use when making a node server.

### Instructions

- Run `npm install --save express`

## Step 3

In this step, we will create a `.gitignore` file to ignore the `node_modules`
folder `npm install` created.

### Instructions

- Create a `.gitignore` file in the root of the project.
- Add `node_modules` on the first line and save the file.

### Solution

<details>

<summary> <code> .gitignore </code> </summary>

```
node_modules
```

</details>

## Step 4

In this step, we will create our server and have it listen on port `3001`.

### Instructions

- In the root of the directory create a folder called `server`.
- Create an `index.js` file in `server/`.
- Open `server/index.js`.
- Require `express` in a variable called `express`.
- Create a variable called `app` that equals the invocation of the `express`
  package.
- Call the `use` method on app and pass in the `express.json` method invoked.
- Call the `listen` method on app. The app should listen on port 3001:
  - The first parameter of `listen` is the port number.
  - The second parameter of `listen` is a callback function that is called when
    the app starts listening.

### Solution

<details>

<summary> <code> server/index.js </code> </summary>

```js
const express = require('express');

const app = express();

app.use(express.json());

const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```

</details>

## Step 5

### Summary

In this step, we will create a controller that keeps track of the book
collection and import that controller into `server/index.js`. You can think of a
controller as an interface to the underlying data we are interested in
accessing.

### Instructions

- Create a folder in `server/` called `controllers`.
- In `server/controllers/` create a file called `booksController.js`.
- Open `server/controllers/booksController.js`.
- Create a variable called `books` that equals an empty array.
  - The `books` variable will keep track of all our books. A book will be an
    object that has an `id`, `title`, and `author` property.
- Create a variable called `id` that equals `0`.
  - After a creation of a book, we will increment this by `1` to insure no books
    have the same `id`.
- Use `module.exports` to export an object.
- Open `server/index.js`.
- Require the books controller at the top of `server/index.js` in a variable
  called `bc`.

### Solution

<details>
<summary><code> server/controller/booksController.js </code></summary>

```js
let books = [];
let id = 0;

module.exports = {};
```

</details>

<details>
<summary><code> server/index.js </code></summary>

```js
const express = require('express');
const bc = require('./controllers/booksController.js');

const app = express();

app.use(express.json());

const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```

</details>

## Step 6

### Summary

In this step, we will create the endpoint to `get` all the books. We will also
create the method in the `booksController` to be used as the endpoint's handler
function.

When creating a `get` route, you can use the `get` method on the `app` object.
The first argument is the URL of the request and the second argument is the
function to execute when that URL is hit. We will be getting that function from
the `booksController`.

### Instructions

- Open `server/index.js`.
- Below the top level middleware and above the listen method invocation, add a
  `get` endpoint.
  - The URL path should be `/api/books`.
  - The handler function will come from the `booksController`, we will add it
    once we create it.
- Open `server/controllers/booksController.js`.
- Create a method called `read` in the `module.exports` object.
  - This method should return all the books.
- Return to the `get` endpoint in `server/index.js` that we just wrote and add
  the `read` method as the second argument after the URL path.

### Solution

<details>

<summary> <code> server/controller/booksController.js </code> </summary>

```js
let books = [];
let id = 0;

module.exports = {
  read: (req, res) => {
    res.status(200).send(books);
  },
};
```

</details>

<details>

<summary> <code> server/index.js </code> </summary>

```js
const express = require('express');
const bc = require('./controllers/booksController.js');

const app = express();

app.use(express.json());

app.get('/api/books', bc.read);

const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```

</details>

## Step 7

### Summary

In this step, we will create the endpoint to `post` a new book. We will also
create the method in the `booksController` to be used as the endpoint's handler
function.

### Instructions

- Open `server/index.js`.
- Below the `get` endpoint, add a `post` endpoint.
  - The URL path should be `/api/books`.
  - The handler function will come from the `booksController`, we will add it
    once we create it.
- Open `server/controllers/booksController.js`.
- Create a method called `create` in the `module.exports` object.
  - This method should add a new book from the request body to the `books`
    array.
  - When finished, it should return all the books.
  - Keep in mind, the information you'll be getting from the request body are
    `title` and `author`. You'll have to add your own id property with the value
    coming from the `id` variable. Don't forget to increment the `id` variable
    when you're done.
- Return to the `post` endpoint in `server/index.js` that we just wrote and add
  the `create` method as the second argument after the URL path.

### Solution

<details>

<summary> <code> server/controller/booksController.js </code> </summary>

```js
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
      author,
    };
    books.push(book);
    id++;
    res.status(200).send(books);
  },
};
```

</details>

<details>

<summary> <code> server/index.js </code> </summary>

```js
const express = require('express');
const bc = require('./controllers/booksController.js');

const app = express();

app.use(express.json());

app.get('/api/books', bc.read);
app.post('/api/books', bc.create);

const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```

</details>

## Step 8

### Summary

In this step, we will create a `put` endpoint to update a specific book by it's
id. We will also create the method in the `booksController` to be used as the
endpoint's handler function.

### Instructions

- Open `server/index.js`.
- Below the `post` endpoint, add a `put` endpoint.
  - You will be using the `params` object in this endpoint, specifically an id
    you'll get from the URL parameters. Make sure to indicate this at the end of
    the URL path `/api/books`.
  - The handler function will come from the `booksController`, we will add it
    once we create it.
- Open `server/controllers/booksController.js`.
- Create a method called `update` in the `module.exports` object.
  - This method should find a specific book based off of an id that you'll get
    off of the `params` object.
  - Once the book is found, update the book with the new information you'll get
    off of the request body.
  - Return all the books.
- Return to the `put` endpoint in `server/index.js` that we just wrote and add
  the `update` method as the second argument after the URL path.

### Solution

<details>

<summary> <code> server/controller/booksController.js </code> </summary>

```js
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
      author,
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
        ...(author && { author }), // conditionally applies if author is defined
      });
      return res.status(200).send(books);
    }
    return res.status(404).send({ error: 'Could not find specified book.' });
  },
};
```

</details>

<details>

<summary> <code> server/index.js </code> </summary>

```js
const express = require('express');
const bc = require('./controllers/booksController.js');

const app = express();

app.use(express.json());

app.get('/api/books', bc.read);
app.post('/api/books', bc.create);
app.put('/api/books/:id', bc.update);

const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```

</details>

## Step 9

### Summary

In this step, we will create a `delete` endpoint to delete a specific book by
it's id. We will also create the method in the `booksController` to be used as
the endpoint's handler function.

### Instructions

- Open `server/index.js`.
- Below the `put` endpoint, add a `delete` endpoint.
  - You will be using the `params` object in this endpoint, specifically an id
    you'll get from the URL parameters. Make sure to indicate this at the end of
    the URL path `/api/books`.
  - The handler function will come from the `booksController`, we will add it
    once we create it.
- Open `server/controllers/booksController.js`.
- Create a method called `delete` in the `module.exports` object.
  - This method should find a specific book based off of an id that you'll get
    off of the `params` object.
  - Once the book is found, remove that book from the `books` array.
  - Return all the books.
- Return to the `delete` endpoint in `server/index.js` that we just wrote and
  add the `delete` method as the second argument after the URL path.

### Solution

<details>

<summary> <code> server/controller/booksController.js </code> </summary>

```js
let books = [];
let id = 0;

module.exports = {
  read: (req, res) => {
    res.status(200).send(books);
  },
  create: (req, res) => {
    const { title, author } = req.body;
    let book = {
      id: id,
      title: title,
      author: author,
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
        ...(author && { author }), // conditionally applies if author is defined
      });
      return res.status(200).send(books);
    }
    return res.status(404).send({ error: 'Could not find specified book.' });
  },
  delete: (req, res) => {
    const bookIndex = books.findIndex(
      book => Number(req.params.id) === book.id
    );
    if (bookId > -1) {
      books.splice(bookIndex, 1);
      return res.status(200).send(books);
    }

    return res.status(404).send({ error: 'Could not find specified book.' });
  },
};
```

</details>

<details>

<summary> <code> server/index.js </code> </summary>

```js
const express = require('express');
const bc = require('./controllers/booksController.js');

const app = express();

app.use(express.json());

app.get('/api/books', bc.read);
app.post('/api/books', bc.create);
app.put('/api/books/:id', bc.update);
app.delete('/api/books/:id', bc.delete);

const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```

</details>

## Step 10

### Summary

In this step, we will use `express.static` to serve the `index.html` file for
the web application that utilizes our API. `express.static` takes an argument
that is the location of the folder with the files you want to serve when the
server URL is hit in a browser. Our front-end was made using `create-react-app`
and instead of running it's own server, we have made a production ready build so
that our server can serve up our frontend. We'll want to serve the entire
`build` folder.

### Instructions

- Call the `use` method on app and pass in
  `express.static( __dirname + '/../build')`.
- Add some books to your collection using Postman.
- Open up `http://localhost:3001` in your browser.
- You should see the react application being served from our express server

### Solution

<details>

<summary> <code> server/index.js </code> </summary>

```js
const express = require('express');
const bc = require('./controllers/booksController.js');

const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../build'));

app.get('/api/books', bc.read);
app.post('/api/books', bc.create);
app.put('/api/books/:id', bc.update);
app.delete('/api/books/:id', bc.delete);

const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```

</details>

## Step 11

### Summary

We'll add some data to our API server using insomnia.

### Instructions

1. Add some books utilizing the React application. If it's not working look back at your server implementation.
3. Use insomnia to `update` one of the books, rember to use an `id`.
4. Use insomnia to `delete` one of the books.

Congratulations you just created a full CRUD API from scratch.
