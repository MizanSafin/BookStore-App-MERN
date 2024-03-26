const AdminModel = require("../Models/AdminModel");
const BooksModel = require("../Models/BookModel");
const StudentModel = require("../Models/StudentsModel");

exports.getDashboard = async (req, res) => {
  try {
    const books = await BooksModel.countDocuments();
    const students = await StudentModel.countDocuments();
    const admin = await AdminModel.countDocuments();

    res.status(200).json({
      success: true,
      books,
      students,
      admin,
    });
  } catch (error) {
    res.json({
      success: false,
      error,
    });
  }
};
