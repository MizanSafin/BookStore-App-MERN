const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = (req, res, next) => {
  let token = req.cookies.token;
  if (!token) {
    return res.status(500).json({
      success: false,
      message: "Invalid login",
    });
  }
  jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (err) {
      jwt.verify(token, process.env.Student_Key, (err, decoded) => {
        if (err) {
          return res.send({
            message: "Error in token verification .",
          });
        } else {
          req.role = decoded["role"];
          req.username = decoded["username"];
          next();
        }
      });
    } else {
      req.role = decoded["role"];
      req.username = decoded["username"];
      next();
    }
  });
};
