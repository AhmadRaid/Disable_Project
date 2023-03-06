const mongoose = require('mongoose');

const verificationSchema = new mongoose.Schema({
  userId: {
    type: String,
    ref: 'users',
  },
  verificationCode: {
    type: String,
  },
  createdAt: { type: Date, expires: '2m', default: Date.now },
});
const Verification = mongoose.model('verification_code', verificationSchema);
module.exports = Verification;
