const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cors = require("cors");

const classRoutes = require("./routes/classRoutes");
// const studentRoutes = require("./routes/studentRoutes");
// const enrollmentRoutes = require("./routes/enrollmentRoutes");
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/classes",classRoutes);
// app.use("./api/students",studentRoutes);
// app.use("./api/enrollments",enrollmentRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("connected to db");
    app.listen(process.env.PORT || 3000,()=>{
        console.log(`server is running ${process.env.PORT || 3000}`)
    })
})
.catch(err => console.log("failed to connect db ", err));