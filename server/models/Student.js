const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  id: {
    type: Number,
    unique: true,
    required: "Please Supply an id",
  },
  firstName: {
    type: String,
    required: "Please Supply a first name",
  },
  lastName: {
    type: String,
    required: "Please Supply a last name",
  },
  age: {
    type: Number,
    required: "Please Supply an age",
  },
  nationality: {
    type: String,
    required: "Please select a nationality",
  },
});

studentSchema.set("collection", "students");

module.exports = mongoose.model("Student", studentSchema);
