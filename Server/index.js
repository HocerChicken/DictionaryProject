const express = require("express");
const authRoute = require("./Routes/auth");
const userRoute = require("./Routes/users");
const postRoute = require("./Routes/posts");
const wordRoutes = require("./Routes/wordRoute.js");
const word2Routes = require("./Routes/word2Route.js");
const dictionaryRoutes = require("./Routes/dictionaries.js");
var cors = require("cors");

const app = express();
const dotenv = require("dotenv");
app.use(cors());

dotenv.config();
require("./db");
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/words", wordRoutes);
app.use("/api/word2s", word2Routes);
app.use("/api/dictionaries", dictionaryRoutes);

app.listen(5000, () => {
  console.log("Backend is running.");
});
