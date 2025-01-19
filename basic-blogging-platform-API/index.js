const express = require("express");
const fs = require("fs")
const mongoose = require("mongoose");
const postroutes = require("./routes/postRoutes")
const loggingMiddleware = require("./middlewares/loggingmiddleware")
const errorMiddleware = require("./middlewares/errormiddleware");
const authorRoutes = require("./routes/authorRoute")

const app = express();
app.use(express.json());
app.use(loggingMiddleware)

app.use("/posts", postroutes);
app.use("/authors",authorRoutes);


app.get("/",(req,res)=>{
    res.send("welcome to blogging platform API");
})

app.use(errorMiddleware);


app.listen(3000, async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/blogDB");
    console.log("connected to db");
    console.log("running on http://localhost:3000");
})