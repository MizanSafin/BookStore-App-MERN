const multer = require("multer");

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
  destination: (req, file, cb) => {
    cb(null, "public");
  },
});

module.exports = storage;
