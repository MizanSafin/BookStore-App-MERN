const express = require("express");
const { createAdmin } = require("../Controllers/AdminControllers");
const { getDashboard } = require("../Controllers/DashboardController");

const router = express.Router();

router.get("/createAdmin", createAdmin);
router.get("/dashboard", getDashboard);

module.exports = router;
