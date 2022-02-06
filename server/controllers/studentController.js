const mongoose = require("mongoose");
const fs = require("fs");

const Student = require("../models/Student");

const seedstudents = JSON.parse(
  fs.readFileSync(__dirname + "/data/students.json", "utf-8")
);

exports.seedStudents = async (req, res) => {
  try {
    await Student.deleteMany();
    await Student.insertMany(seedstudents);
    res.status(200).send({ message: "Students initialized" });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    const nationalities = await Student.distinct("nationality");
    res.status(200).send({ students, nationalities });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.addStudent = async (req, res) => {
  try {
    const newStudent = req.body;
    const student = await Student.create(newStudent);
    res.status(200).send(student);
  } catch (err) {
    res.status(500).send(err);
  }
};
