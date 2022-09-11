const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      unique: true,
    },
    age: { type: Number, required: true },
    work: { type: String },
    mobileNo: { type: Number },
  },
  { strict: true }
);

module.exports = mongoose.model("User", userSchema);
