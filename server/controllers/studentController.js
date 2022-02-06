const mongoose = require("mongoose");
const fs = require("fs");

const Student = require("../models/Student");

const students = JSON.parse(
  fs.readFileSync(__dirname + "/data/students.json", "utf-8")
);

exports.seedStudents = async (req, res) => {
  try {
    await Student.deleteMany();
    await Student.insertMany(students);
    res.status(200).send({ message: "Students initialized" });
  } catch (err) {
    res.status(500).send(err);
  }
};
