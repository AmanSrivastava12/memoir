const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    emailbody: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("user", userSchema);
