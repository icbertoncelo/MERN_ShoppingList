const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

// Db Config
const db = require("./config/keys").mongoURI; // Mlab Database
//const db = "mongodb://localhost:27017/nodeapi"; For a Local Mongodb

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Defining the port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
