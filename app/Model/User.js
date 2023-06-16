const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
  },
  password: { type: String, required: true, select: false },
  role: {
    type: String,
    required: true,
    enum: ["Supporter", "Admin", "Disable"],
  },
  phone: { type: String },
  // country: { type: String },
  location: {
    country: [String],
    city: [String],
    street: [String],
    zip_code: [String],
  },
  social_status: {
    // required: function () {
    //   return this.role == "Disabled";
    // },
    wifes_no: {
      type: Number,
    },
    children_no: [Number],
  },
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const userMethod = mongoose.model("User", userSchema);
module.exports = userMethod;
