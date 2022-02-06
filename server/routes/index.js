const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

// Routes
router.get("/init", studentController.seedStudents);

module.exports = router;
