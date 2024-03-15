const express = require("express");
const DictCheckNoms = require("../models/wordCheckNomModel");
const router = express.Router();

//Route to get a specific word by title
router.get("/:quocngu", async (req, res) => {
  try {
    const { quocngu } = req.params;
    const word = await DictCheckNoms.findOne({ quocngu });

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
