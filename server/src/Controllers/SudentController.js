const bcrypt = require("bcrypt");
const StudentModel = require("../Models/StudentsModel");

exports.registerStudent = async (req, res) => {
  try {
    const { username, roll, password, grade } = req.body;

    let student = await StudentModel.findOne({ username });

    if (student) {
      return res.status(400).json({
        success: false,
        message: "student have already registered.",
      });
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newStudent = await StudentModel.create({
      username,
      password: hashedPassword,
      roll,
      grade,
    });

    return res.status(201).json({
      success: true,
      message: "Student have registered successfully",
      newStudent,
    });
  } catch (error) {
    return res.status(500).send({
      message: "error in student registration .",
      error,
    });
  }
};
