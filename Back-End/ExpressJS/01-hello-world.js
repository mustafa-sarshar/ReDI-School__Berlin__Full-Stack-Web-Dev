const express = require("express");
const app = express();
const PORT = 3000;

// Define a Logger middleware

const myLogger = (req, res, next) => {
  // code ...
  next();
};
app.use(myLogger);

app.use(express.static("public"));

const requestLogger = (req, res, next) => {
  const now = new Date().toUTCString();
  console.log(`${now} - Request from: ${req.originalUrl}`);
  next();
};
app.use(requestLogger);

app.get("/", (req, res, next) => {
  res.send("Hello World!");
});

app.get("/login", (req, res, next) => {
  res.send("You are logged in!");
});

app.get("/books/:id", (req, res, next) => {
  const bookId = req.params.id;
  res.send(`Here is more info about the book with id: ${bookId}`);
});

app
  .route("/users/:id")
  .get((req, res, next) => {
    const userId = req.params.id;
    res.send(`Get user data with id: ${userId}`);
  })
  .put((req, res, next) => {
    const userId = req.params.id;
    res.send(`Update user with id: ${userId}`);
  })
  .delete((req, res, next) => {
    const userId = req.params.id;
    res.send(`Delete user with id: ${userId}`);
  });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});