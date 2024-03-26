const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    name: { type: String },
    author: { type: String, required: true },
    imageUrl: { type: String },
  },
  { versionKey: false, timestamps: true }
);

const BooksModel = mongoose.model("books", bookSchema);

module.exports = BooksModel;
