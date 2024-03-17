const mongoose = require("mongoose");

const wordSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId,
  },
  title: {
    type: String,
    required: true,
  },
  definitions: {
    source: {
      type: [mongoose.Schema.Types.Mixed],
    },
  },
});

module.exports = mongoose.model("dictviets", wordSchema);
