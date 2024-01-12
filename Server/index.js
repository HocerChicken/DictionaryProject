const express = require("express");
const { PORT, mongoDBUrl } = require("./config.js");
const mongoose = require("mongoose");
const Word = require("./models/wordModel.js");
const wordRoutes = require("./Routes/wordRoute.js");
const app = express();

//Middleware for passing requests body
app.use(express.json());

app.use("/api/words", wordRoutes);

mongoose.set("strictQuery", false);
mongoose
    .connect(mongoDBUrl)
    .then(() => {
        console.log("Successfully connected Database!!!");
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
