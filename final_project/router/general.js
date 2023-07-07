const express = require("express");
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

public_users.post("/register", (req, res) => {
  //Write your code here
  const username = req.body.username;
  const password = req.body.password;

  if (username && password) {
    if (isValid(username)) {
      users.push({ username: username, password: password });
      return res
        .status(200)
        .json({ message: "User successfully registred. Now you can login" });
    } else {
      return res.status(404).json({ message: "User already exists!" });
    }
  }
  return res.status(404).json({ message: "Unable to register user." });
});

// Get the book list available in the shop
public_users.get("/", function (req, res) {
  //Write your code here
  return res.send(JSON.stringify(books, null, 4));
});

// Get book details based on ISBN
public_users.get("/isbn/:isbn", function (req, res) {
  //Write your code here
  const isbn = req.params.isbn;
  return res.send(books[isbn]);
});

// Get book details based on author
public_users.get("/author/:author", function (req, res) {
  //Write your code here
  const author = req.params.author;
  let validBooks = [];
  for (let bookISBN in books) {
    const bookAuthor = books[bookISBN].author;
    if (bookAuthor === author) {
      validBooks.push(books[bookISBN]);
    }
  }

  if (validBooks.length > 0) {
    res.send(JSON.stringify(validBooks, null, 4));
  } else {
    return res.status(404).json({ message: "Provided author does not exist" });
  }
});

// Get all books based on title
public_users.get("/title/:title", function (req, res) {
  //Write your code here
  const title = req.params.title;
  let validBooks = [];
  for (let bookISBN in books) {
    const bookTitle = books[bookISBN].title;
    if (bookTitle === title) {
      validBooks.push(books[bookISBN]);
    }
  }

  if (validBooks.length > 0) {
    res.send(JSON.stringify(validBooks, null, 4));
  } else {
    return res
      .status(404)
      .json({ message: "Provided book title does not exist" });
  }
});

//  Get book review
public_users.get("/review/:isbn", function (req, res) {
  //Write your code here
  const isbn = req.params.isbn;
  if (books[isbn] !== null) {
    res.send(JSON.stringify(books[isbn].reviews, null, 4));
  } else {
    return res.status(404).json({ message: "Provided book does not exist" });
  }
});

module.exports.general = public_users;
