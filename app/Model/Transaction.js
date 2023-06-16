const mongoose = require('mongoose');

const transactionsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true  
        },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
    job_id: { 
      type: mongoose.Schema.Types.ObjectId,
      ref: 'job',
    },
  },
  { timestamps: true },
);

const Transactions = mongoose.model('transactions', transactionsSchema);
module.exports = Transactions;
