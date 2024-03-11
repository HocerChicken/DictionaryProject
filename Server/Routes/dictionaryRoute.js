const express = require('express');
const router = express.Router();
const PersonalDictionary = require('../models/PersonalDictionary'); // Import model của từ điển cá nhân

// Endpoint để kiểm tra bộ từ điển cá nhân của người dùng
router.get('/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const dictionary = await PersonalDictionary.findOne({ userId });

        if (!dictionary) {
            return res.status(404).json({ message: "Bộ từ điển cá nhân không tồn tại." });
        }

        res.json({ dictionary });
    } catch (error) {
        console.error("Lỗi khi kiểm tra từ điển cá nhân:", error);
        res.status(500).json({ message: "Đã xảy ra lỗi khi kiểm tra từ điển cá nhân." });
    }
});

// Endpoint để cập nhật hoặc tạo mới bộ từ điển cá nhân
router.put('/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const { dictionary } = req.body;

        let personalDictionary = await PersonalDictionary.findOne({ userId });

        if (!personalDictionary) {
            personalDictionary = new PersonalDictionary({ userId, dictionary });
            await personalDictionary.save();
        } else {
            personalDictionary.dictionary = dictionary;
            await personalDictionary.save();
        }

        res.json({ message: "Bộ từ điển cá nhân đã được cập nhật." });
    } catch (error) {
        console.error("Lỗi khi cập nhật từ điển cá nhân:", error);
        res.status(500).json({ message: "Đã xảy ra lỗi khi cập nhật từ điển cá nhân." });
    }
});

module.exports = router;
