const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

// Routes
router.get("/init", studentController.seedStudents);
router.get("/students/all", studentController.getStudents);

module.exports = router;
