const express = require('express');
const router = express.Router();
const PersonalDictionary = require('../models/Dictionary'); // Import model của từ điển cá nhân

// Endpoint để kiểm tra bộ từ điển cá nhân của người dùng
router.get("/:username", async (req, res) => {
    try {
        const { username } = req.params;
        const dic = await PersonalDictionary.findOne({ username });
        if (!dic) {
            return res.status(200).json(null);
        }
        return res.status(200).json(dic);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
});

// Endpoint để cập nhật hoặc tạo mới bộ từ điển cá nhân
router.post('', async (req, res) => {
    const newDictionary = new PersonalDictionary(req.body);
    try {
        const savedDictionary = await newDictionary.save();
        res.status(200).json(savedDictionary);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Endpoint để cập nhật hoặc tạo mới bộ từ điển cá nhân
router.put('/:username', async (req, res) => {
    try {
        const { username } = req.params;
        const { title } = req.body;

        let dictionary = await PersonalDictionary.findOne({ username });
        if (!dictionary) {
            // Nếu bộ từ điển không tồn tại, tạo mới 
            dictionary = new PersonalDictionary({
                username,
                title,
            });
        } else {
            // Nếu bộ từ điển đã tồn tại, cập nhật
            if (!Array.isArray(title)) {
                console.log("loi 1")
                return res.status(400).send({ message: 'Invalid title format' });
            }

            if (title.length > 0) {
                let check = true
                dictionary.title.map((item, index) => {
                    if (item === title[title.length - 1]) {
                        check = false
                        return check
                    }
                })

                // Kiểm tra xem từ đã tồn tại trong mảng title hay chưa
                if (!check) {
                    return res.status(400).send({ message: 'Duplicate titles found' });
                }
            }
            dictionary.title = title;
            // dictionary.definitions = definitions; ủa bên kia cái fetch có cần định nghĩa lại post lần nữa hông ta, put chứ
        }
        const updatedDictionary = await dictionary.save();
        res.status(200).json(updatedDictionary);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Endpoint để lấy bộ từ điển cá nhân dựa trên ID (endpoint: /dictionaries/:id)
router.get("/dictionaries/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const dictionary = await PersonalDictionary.findById(id);
        if (!dictionary) {
            return res.status(404).send({ message: "Dictionary not found" });
        }
        return res.status(200).json(dictionary);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
});

module.exports = router;
