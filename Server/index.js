const express = require("express");
const authRoute = require("./Routes/auth");
const userRoute = require("./Routes/users");
const postRoute = require("./Routes/posts");
const wordVietRoutes = require("./Routes/wordVietRoute.js");
const wordCheckNomRoutes = require("./Routes/wordCheckNomRoute.js");
const dictionaryRoutes = require("./Routes/dictionaries.js");
const userPostRoute = require("./Routes/userPosts");
const multer = require("multer");
const path = require("path");
var cors = require("cors");

const app = express();
const dotenv = require("dotenv");
app.use(cors());

dotenv.config();
require("./db");
app.use(express.json());

// app.use("/images", express.static(path.join(__dirname, "/images")))
app.use("/images", express.static(path.join(__dirname, "/images")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/wordviets", wordVietRoutes);
app.use("/api/wordchecknoms", wordCheckNomRoutes);
app.use("/api/dictionaries", dictionaryRoutes);
app.use("/api/userPosts", userPostRoute);

app.listen(5000, () => {
  console.log("Backend is running.");
});
