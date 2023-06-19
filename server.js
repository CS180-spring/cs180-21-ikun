const express = require("express");
const http = require("http");
const cors = require("cors");
//const session = require("express-session");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const fs = require('fs');

const app = express();                                          //server app created
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json())                                     //middleware for handling json
app.use(bodyParser.urlencoded({ extended: true }));

// route
const routes = require('./Routes/route') 
app.use('/', routes)

app.get("/", (req, res) => {
    res.send("Express is here")
});

// app.listen(3000, function () {
//     console.log("server running");                              //express running at 3001
// });

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });

  //http://localhost:3000