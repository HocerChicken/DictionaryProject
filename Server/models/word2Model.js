const mongoose = require("mongoose");

const word2Schema = new mongoose.Schema({
  quocngu: {
    type: String,
    required: true,
  },
  dinhnghia: {
    phanloai: [
      {
        nom: {
          type: String,
          required: true,
        },
        bothu: {
          type: String,
          required: true,
        },
        ngucanh: {
          type: String,
          required: true,
        },
        nguon: {
          type: String,
          required: true,
        },
        phienam: {
          type: String,
          required: true,
        },
      },
    ],
  },
});

module.exports = mongoose.model("dictionaries2", word2Schema);
