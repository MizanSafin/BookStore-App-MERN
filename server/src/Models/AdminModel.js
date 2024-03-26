const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const AdminModel = mongoose.model("admins", adminSchema);

module.exports = AdminModel;
