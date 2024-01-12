const express = require("express");
const Word = require("../models/wordModel");
const router = express.Router();

//Route to save a new word
router.post("", async (req, res) => {
    try {
        if (!req.body.word || !req.body.definition) {
            return res.status(400).send({
                message: "Please enter required fields: word, define",
            });
        }
        const newWord = {
            word: req.body.word,
            definition: req.body.definition,
        };
        const word = await Word.create(newWord);

        return res.status(200).send({ message: word });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({
            message: error.message,
        });
    }
});

//get all words from the database
router.get("", async (req, res) => {
    try {
        const words = await Word.find({});
        return res.status(200).json({
            count: words.length,
            data: words,
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
});

//get word by ID from the database
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const word = await Word.findById(id);
        console.log(word);
        return res.status(200).json(word);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
});

//update word from db
router.put("/:id", async (req, res) => {
    try {
        if (!req.body.word || !req.body.definition) {
            return res.status(400).send({
                message: "Please enter required fields: word, definition",
            });
        }
        const { id } = req.params;
        const result = await Word.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).send({ message: "Word not found" });
        }
        return res.status(200).send({ message: "Word updated successfully" });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({
            message: error.message,
        });
    }
});

//delete a word
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Word.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).send({ message: "Word not found" });
        }
        return res.status(200).send({ message: "Word deleted successfully" });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({
            message: error.message,
        });
    }
});

module.exports = router;
