const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    name: { type: String },
    title: { type: String },
    description: { type: String },
  }
  );

const categoryMethod = mongoose.model('Category', categorySchema);
module.exports = categoryMethod;    