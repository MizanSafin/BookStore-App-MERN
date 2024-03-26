const express = require("express");
const authRouter = express.Router();
const AdminModel = require("../Models/AdminModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const StudentModel = require("../Models/StudentsModel");
const VerifyUser = require("./VerifyUser");
require("dotenv").config();

authRouter.post("/login", async (req, res) => {
  try {
    const { username, password, role } = req.body;
    if (role == "admin") {
      const admin = await AdminModel.findOne({ username });
      if (!admin) {
        return res.status(404).send({
          success: false,
          message: "Admin is not found",
        });
      }
      const validatePassword = bcrypt.compareSync(password, admin.password);
      if (!validatePassword) {
        return res.status(500).send({
          success: false,
          message: "credentials fail .",
        });
      }
      let token = jwt.sign(
        { role: "admin", username: admin.username },
        process.env.JWT_KEY,
        { expiresIn: "1h" }
      );
      res.cookie("token", token, {
        httpOnly: true,
        //    secure: true,
        expires: new Date(Date.now() + 1000 * 60 * 60),
      });
      //   res.cookie("token", token);
      return res.status(200).json({
        success: true,
        message: "Verification passed .",
        login: true,
        role: "admin",
      });
    } else if (role === "student") {
      let student = await StudentModel.findOne({ username });
      if (!student) {
        return res.status(404).send({
          success: false,
          message: "Student not found.",
        });
      }
      let validatePassword = bcrypt.compareSync(password, student.password);
      if (!validatePassword) {
        return res.status(500).send({
          success: false,
          message: "password not match.",
        });
      }
      let token = jwt.sign(
        { username: student.username, role: "student" },
        process.env.Student_Key,
        { expiresIn: "1h" }
      );
      res.cookie("token", token, {
        httpOnly: true,
        // secure:true,
      });
      return res.status(200).send({
        success: true,
        login: "success",
        message: "Student Login  successfully .",
        role: "student",
        student,
      });
    } else {
      return res.send(`Please wait`);
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
});

authRouter.get("/verify", VerifyUser, (req, res) => {
  return res.status(200).json({
    login: true,
    role: req.role,
  });
});
authRouter.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.status(200).send({
    logout: true,
    message: "Logout successfully .",
  });
});
module.exports = authRouter;
