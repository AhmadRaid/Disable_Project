const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

const jobMethod = mongoose.model("Job", jobSchema);
module.exports = jobMethod;
