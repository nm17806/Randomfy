const path = require("path");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// connecting to DB
const uri = process.env.ATLAS_URI;
const port = process.env.PORT;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
  // listen for requests
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
});

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// songs routes
const songsRoutes = require("./routes/songs");
app.use("/api/songs", songsRoutes);

const userRoutes = require("./routes/user");
app.use("/api/user", userRoutes);
