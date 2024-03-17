const express = require("express");
const DictViets = require("../models/wordVietModel");
const router = express.Router();

// Get random Viet Word
// Get all Viet words:
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

// Get all Viet words:
router.get("/", async (req, res) => {
  try {
    const wordList = await DictViets.find({});
    if (wordList.length === 0)
      return res.status(404).send({ message: "No word found" });
    res.status(200).json(wordList);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
