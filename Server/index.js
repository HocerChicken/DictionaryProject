const express = require("express");
const Word = require("./models/wordModel.js");
const authRoute = require("./Routes/auth");
const userRoute = require("./Routes/users");
const wordRoutes = require("./Routes/wordRoute.js");
var cors = require("cors");

const app = express();
const dotenv = require("dotenv");
app.use(cors());

dotenv.config();
require("./db");
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/words", wordRoutes);

app.listen(5000, () => {
  console.log("Backend is running.");
});
