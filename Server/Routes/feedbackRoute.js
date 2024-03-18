const router = require("express").Router();
const Feedback = require("../models/Feedback")

// Yêu cầu mới
router.post("/", async (req, res) => {
    try {
        const newFeedback = new Feedback({
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message,
        });

        const feedback = await newFeedback.save();
        res.status(200).json(feedback);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Lấy feedback
// Lấy tất cả các feedback
router.get("/", async (req, res) => {
    try {
        const feedback = await Feedback.find();
        res.status(200).json(feedback);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Xóa feeback:
router.delete("/:id", async (req, res) => {
    try {
        const feedback = await Feedback.findById(req.params.id);
        try {
            await feedback.deleteOne();
            res.status(200).json("feedback has been deleted...");
        } catch (err) {
            res.status(500).json(err);
        }

    } catch (err) {
        res.status(500).json(err);
    }
});

// Lấy feedback bằng ID: 
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const feedback = await Feedback.findById(id);
        console.log("feedback: - ", feedback)
        if (!feedback) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.status(200).json(feedback);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;