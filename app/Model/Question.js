const mongoose = require("mongoose");

const questionAnswerSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required:true
  },
  question: { type: String ,required:true },
  answer: { type: String , required:true },
});

const questionAnswerMethod = mongoose.model("Question-Answer", questionAnswerSchema);
module.exports = questionAnswerMethod;
