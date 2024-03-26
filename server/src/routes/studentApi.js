const express = require("express");
const { registerStudent } = require("../Controllers/SudentController");
const VerifyAdmin = require("../middleware/VerifyAdmin");
const studentsRouter = express();

studentsRouter.post("/register", VerifyAdmin, registerStudent);

module.exports = studentsRouter;
