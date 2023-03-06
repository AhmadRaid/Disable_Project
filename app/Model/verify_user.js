const mongoose = require("mongoose");

const verificationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  verificationEmail: {
    type: Boolean,
    default: false,
  },
  verificationID: {
    type: Boolean,
    document_type: {
      type: String,
      enum: ["identify_Card", "Passport", "Driver License"],
    },
    idFile: [String],
  },
  verificationMobile: {
    type: Boolean,
    default: false,
  },
  verifiedAddress: {
    status: {
      type: String,
      default: "not_uploaded",
      enum: ["not_uploaded", "pending", "approved", "rejected"],
    },
    addressDocumentType: {
      type: String,
      enum: [
        "water_bill",
        "phone_bill",
        "bank_statement",
        "electricity_bill",
        "other",
      ],
    },
    addressFile: {
      type: String,
      trim: true,
    },
    otherDocumentType: {
      type: String,
      trim: true,
    },
    disapproveReason: {
      reason: { type: String },
      note: { type: String },
    },
  },
  createdAt: { type: Date, expires: "2m", default: Date.now },
});
const Verification = mongoose.model("verification_user", verificationSchema);
module.exports = Verification;
