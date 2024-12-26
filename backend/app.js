const express = require("express");
const app = express();
require('dotenv').config;

// Middleware
app.use(express.json());

// Routes
app.get('/', function (req, res) {
    res.status(200).send({ msg: "It is working" });
  });



// port
const port = process.env.PORT || 4000;

// server listen
app.listen(port, () => console.log(`server is running on ${port}`));