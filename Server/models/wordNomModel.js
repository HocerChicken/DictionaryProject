const mongoose = require("mongoose");

const word3Schema = new mongoose.Schema({
  quocngu: {
    type: "String",
  },
  dinhnghia: {
    phanloai: {
      type: ["Mixed"],
    },
  },
});

module.exports = mongoose.model("DictNom", word3Schema);
