const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: { type: String },
  title: { type: String },
  description: { type: String }
});

const courseMethod = mongoose.model("Course", courseSchema);
module.exports = courseMethod;


