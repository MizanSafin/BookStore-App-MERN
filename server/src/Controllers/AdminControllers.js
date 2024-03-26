const AdminModel = require("../Models/AdminModel");
const bcrypt = require("bcrypt");

exports.createAdmin = async (req, res) => {
  try {
    const adminCount = await AdminModel.countDocuments();

    if (adminCount === 0) {
      let salt = bcrypt.genSaltSync(10);
      let hashedPassword = bcrypt.hashSync("userpassword", salt);

      let newAdmin = {
        username: "admin",
        password: hashedPassword,
      };
      await AdminModel.create(newAdmin);
      return res.status(201).send({
        success: "true",
        message: "Admin is created",
      });
    } else {
      return res.send(`Admin already exist .`);
    }
  } catch (error) {
    return res.status(500).send({
      success: "fail",
      message: error,
    });
  }
};
