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

// //UPDATE POST
// router.put("/:id", async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);
//     if (post.username === req.body.username) {
//       try {
//         const updatedPost = await Post.findByIdAndUpdate(
//           req.params.id,
//           {
//             $set: req.body,
//           },
//           { new: true }
//         );
//         res.status(200).json(updatedPost);
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     } else {
//       res.status(401).json("You can update only your post!");
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //DELETE POST
// router.delete("/:id", async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);
//     if (post.username === req.body.username) {
//       try {
//         await post.delete();
//         res.status(200).json("Post has been deleted...");
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     } else {
//       res.status(401).json("You can delete only your post!");
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
