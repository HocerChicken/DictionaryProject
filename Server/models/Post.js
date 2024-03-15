const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    title: {
      type: String,
    },
    image: {
      type: String,
    },
    thumbnail: {
      type: String,
    },
    content: {
      type: String,
    },
    isHot: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("post", PostSchema);
