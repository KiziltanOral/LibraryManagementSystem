const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require("../routes");  

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
 
app.use("/", routes);

app.get("/", (req, res) => {
  res.send("Library Management System is running");
});

module.exports = app;
