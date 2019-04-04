const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// Requiring the Routes
const items = require("./routes/api/items");

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

// Use Routes
app.use("/api/items", items);

// Defining the port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
