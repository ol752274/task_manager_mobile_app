const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const actionRoutes = require("./routes/actionRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/actions");

app.use("/api/auth", authRoutes);
app.use("/api/actions", actionRoutes);

app.listen(5000, () => console.log("Server running on 5000"));
