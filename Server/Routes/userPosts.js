const router = require("express").Router();
const User = require("../models/User");
const userPost = require("../models/userPost");

//CREATE userPost
router.post("/", async (req, res) => {
    const newUserPost = new userPost(req.body);
    try {
        const saveduserPost = await newUserPost.save();
        res.status(200).json(saveduserPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

//UPDATE userPost
router.put("/:id", async (req, res) => {
    try {
        const userpost = await userPost.findById(req.params.id);
        if (userpost.username === req.body.username) {
            try {
                const updatedUserPost = await userPost.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true }
                );
                res.status(200).json(updatedUserPost);
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can update only your userPost!");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE userPost
router.delete("/:id", async (req, res) => {
    try {
        const user_post = await userPost.findById(req.params.id);

        if (user_post.username === req.body.username) {
            try {
                await user_post.deleteOne();
                console.log("Hello yt")
                res.status(200).json("Post has been deleted...");
            } catch (err) {
                console.log(err)
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can delete only your post!");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET userPost
router.get("/:id", async (req, res) => {
    try {
        const user_post = await userPost.findById(req.params.id);
        res.status(200).json(user_post);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL userPostS
router.get("/", async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
        let user_post;
        if (username) {
            user_post = await userPost.find({ username });
        } else if (catName) {
            user_post = await userPost.find({
                categories: {
                    $in: [catName],
                },
            });
        } else {
            user_post = await userPost.find();
        }
        res.status(200).json(user_post);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;