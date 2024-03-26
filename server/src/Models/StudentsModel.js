const mongoose = require("mongoose");

const studentsSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  roll: { type: String },
  grade: { type: String },
});

const StudentModel = mongoose.model("students", studentsSchema);

module.exports = StudentModel;
