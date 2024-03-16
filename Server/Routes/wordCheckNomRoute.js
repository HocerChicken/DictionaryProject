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

// Route to get all words
router.get("/", async (req, res) => {
  try {
    const words = await DictCheckNoms.find();

    if (words.length === 0) {
      return res.status(404).send({ message: "Not found" });
    }

    return res.status(200).json(words);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});

// Route to get a specific definitioins by "nom"
router.get("/nom/:nom", async (req, res) => {
  try {
    const { nom } = req.params;
    const words = await DictCheckNoms.find({ "dinhnghia.phanloai.nom": nom });

    const objectArray = [];
    words.forEach((item) => {
      const arrayOfObject = item.dinhnghia.phanloai;
      arrayOfObject.forEach((obj) => {
        if (obj.nom === nom) {
          objectArray.push(obj);
        }
      });
    });
    if (words.length === 0) {
      return res.status(404).send({ message: "Not found" });
    }
    return res.status(200).json(objectArray);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});

// Route to get a specific definitioins by "maunicode"
router.get("/maunicode/:maunicode", async (req, res) => {
  try {
    const { maunicode } = req.params;
    console.log(ma);
    const words = await DictCheckNoms.find({
      "dinhnghia.phanloai.maunicode": maunicode,
    });
    const objectArray = [];
    words.forEach((item) => {
      const arrayOfObject = item.dinhnghia.phanloai;
      arrayOfObject.forEach((obj) => {
        console.log(obj.hasOwnProperty("maunicode"));
        if (obj.maunicode && obj.maunicode === maunicode) {
          objectArray.push(obj);
        }
      });
    });
    if (words.length === 0) {
      return res.status(404).send({ message: "Not found" });
    }
    return res.status(200).json(objectArray);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});

// Route to delete all words
router.delete("/", async (req, res) => {
  try {
    await DictCheckNoms.deleteMany();
    return res.status(200).send({ message: "All words deleted" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
