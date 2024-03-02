const mongoose = require("mongoose");
const { Schema } = mongoose;

const memoSchema = new Schema(
  {
    title: {
      type: String,
    },
    context: {
      type: String,
      required: true,
    },
    ttr: {
      type: Number,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

memoSchema.index({ title: "text", category: "text" });

module.exports = mongoose.model("memo", memoSchema);
