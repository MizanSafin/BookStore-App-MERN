const BooksModel = require("../Models/BookModel");

exports.addBook = async (req, res) => {
  try {
    const { name, author, imageUrl } = req.body;

    const book = await BooksModel.create({
      name,
      author,
      imageUrl,
    });

    return res.status(201).json({
      success: true,
      message: "book have added successfully",
      book,
    });
  } catch (error) {
    return res.status(500).send({
      message: "error in adding book  .",
      error,
    });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await BooksModel.find({});
    return res.status(200).json({ success: true, books });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "cann,t get books.",
    });
  }
};

exports.getSingleBook = async (req, res) => {
  try {
    let { id } = req.params;

    let book = await BooksModel.find({ _id: id });
    res.status(200).json({
      success: true,
      book,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "cann,t get book.",
      error,
    });
  }
};

exports.updateBook = async (req, res) => {
  try {
    let { id } = req.params;
    let reqBody = req.body;
    await BooksModel.updateOne({ _id: id }, reqBody);
    res.status(200).json({
      success: true,
      message: "📙 Book is updated successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in updating book📙",
      error,
    });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    let { id } = req.params;

    await BooksModel.deleteOne({ _id: id });
    res.status(200).json({
      success: true,
      message: "📙 Book is deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in delting book📙",
      error,
    });
  }
};
