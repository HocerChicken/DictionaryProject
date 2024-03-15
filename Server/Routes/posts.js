const express = require("express");
const Posts = require("../models/Post");
const router = express.Router();

//GET ALL
router.get("/", async (req, res) => {
  try {
    const postList = await Posts.find({});
    if (postList.length === 0)
      return res.status(404).send({ message: "No posts found" });
    res.status(200).json(postList);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET POSTs IS HOT
router.get("/ishot", async (req, res) => {
  try {
    const postList = await Posts.find({ isHot: true });
    if (postList.length === 0)
      return res.status(404).send({ message: "No hot posts found" });
    res.status(200).json(postList);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET POST BY Title
router.get("/:title", async (req, res) => {
  try {
    const { title } = req.params;
    const post = await Posts.findOne({ title });
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//CREATE POST
router.post("/", async (req, res) => {
  const newPost = new Posts(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    try {
      const updatedPost = await Posts.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedPost);
    } catch (err) {
      console.log("sai dòng nhỏ")
      console.log(">>> error:", err)
      res.status(500).json(err);
    }
  } catch (err) {
    console.log("sai dòng to")
    res.status(500).json(err);
  }
});

//DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    try {
      await post.deleteOne();
      res.status(200).json("Post has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
