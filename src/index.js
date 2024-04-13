import mongoose from "mongoose";
import connectDB from "./db/index.js";
// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongodb connection failed!!!!!!!", err);
  });
/*
import express from "express";
const app = express()(async () => {
  try {
    mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("error:", error);
      throw error;
    });

    app.listen(process.env.PORT, ()=>{
        console.log(`App is listening on port ${process.env.PORT}.`)
    });
  } catch (error) {
    console.error("ERROR:", error);
    throw err;
  }
})(); //ify to immediately execute a code, recommended to give semicolon at starting of the line
*/
