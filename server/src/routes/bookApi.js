const express = require("express");

const VerifyAdmin = require("../middleware/VerifyAdmin");
const {
  addBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
} = require("../Controllers/BooksController");
const bookRouter = express();

bookRouter.post("/add", VerifyAdmin, addBook);
bookRouter.get("/getbooks", getAllBooks);
bookRouter.get("/getbook/:id", getSingleBook);
bookRouter.post("/updatebook/:id", updateBook);
bookRouter.get("/deletebook/:id", deleteBook);

module.exports = bookRouter;
