import express from "express";
import { PORT, mongoDBUrl } from "./config.js";
import mongoose from "mongoose";

const app = express();

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
