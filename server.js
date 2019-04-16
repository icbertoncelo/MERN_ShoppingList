const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();

// Requiring the Routes
const items = require("./routes/api/items");
const users = require("./routes/api/users");
const auth = require("./routes/api/auth");

// BodyParser Middleware
app.use(express.json());

// Db Config
const db = config.get("MongoURI"); // Mlab Database
//const db = "mongodb://localhost:27017/nodeapi"; For a Local Mongodb

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Use Routes
app.use("/api/items", items);
app.use("/api/users", users);
app.use("/api/auth", auth);

// Defining the port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
