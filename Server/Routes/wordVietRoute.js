const express = require("express");
const DictViets = require("../models/wordVietModel");
const router = express.Router();

//Route to get a specific word by title
router.get("/:title", async (req, res) => {
  try {
    const { title } = req.params;
    const word = await DictViets.findOne({ title });

    if (!word) {
      return res.status(404).send({ message: "Word not found" });
    }

    return res.status(200).json(word);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
