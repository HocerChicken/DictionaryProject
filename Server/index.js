const express = require("express");
const Word = require("./models/wordModel.js");
const authRoute = require("./Routes/auth");
const userRoute = require("./Routes/users");
const wordRoutes = require("./Routes/wordRoute.js");

const app = express();
const dotenv = require("dotenv");

dotenv.config();
require("./db");
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.use(express.json());

app.use("/api/words", wordRoutes);

// mongoose.set("strictQuery", false);
// mongoose
//     .connect(mongoDBUrl)
//     .then(() => {
//         console.log("Successfully connected Database!!!");
//         app.listen(PORT, () => {
//             console.log(`App is listening to port: ${PORT}`);
//         });
//     })
//     .catch((err) => {
//         console.log(err);
//     });

app.listen("5000", () => {
  console.log("Backend is running.");
});
