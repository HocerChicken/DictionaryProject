const express = require("express");
const DictNoms = require("../models/wordNomModel");
const router = express.Router();

// Get random Viet Word
const getRandomWordFromDatabase = async () => {
  try {
    const randomWords = await DictViets.aggregate([
      { $sample: { size: 10 } } // Lấy ngẫu nhiên 20 từ từ cơ sở dữ liệu
    ]);
    return randomWords;
  } catch (error) {
    throw error;
  }
};


router.get("/random", async (req, res) => {
  try {
    const randomWords = await getRandomWordFromDatabase();
    res.status(200).json(randomWords);
  } catch (err) {
    res.status(500).json(err);
    console.log(">>> err", err)
  }
});


//Route to get a specific word by title
router.get("/:quocngu", async (req, res) => {
  try {
    const { quocngu } = req.params;
    const word = await DictNoms.findOne({ quocngu });

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
