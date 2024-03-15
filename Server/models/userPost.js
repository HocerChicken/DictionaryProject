const mongoose = require("mongoose");

const userPostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        content: {
            type: String,
            required: true,
        },
        thumnail: {
            type: String,
            required: false,
        },
        username: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("user_posts", userPostSchema);