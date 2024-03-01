const express = require("express");
const { PORT, mongoDBUrl } = require("./config.js");
const mongoose = require("mongoose");
const Word = require("./models/wordModel.js");
// const wordRoutes = require("./Routes/wordRoute.js");
const authRoute = require("./Routes/auth")
const userRoute = require("./Routes/users")
const app = express();

const dotenv = require("dotenv");

dotenv.config();
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URL, {
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);



//Middleware for passing requests body

// app.use(express.json());

// app.use("/api/words", wordRoutes);

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

app.use("/kento", (req, res) => {
    console.log("hey this kento url")
})
app.listen("5000", () => {
    console.log("Backend is running.");
});