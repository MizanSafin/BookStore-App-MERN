const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
module.exports = (req, res, next) => {
  let token = req.cookies.token;
  if (!token) {
    res.status(500).json({
      success: "false",
      message: "Unauthorized admin",
    });
  }
  jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (err) {
      res.send({
        message: "Error in token verification .",
      });
    } else {
      req.role = decoded["role"];
      req.username = decoded["username"];
      next();
    }
  });
};
