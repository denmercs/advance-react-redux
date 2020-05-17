// main starting point of the application
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const router = require("./router");
const mongoose = require("mongoose");
const cors = require("cors");

// DB setup
mongoose.connect("mongodb://localhost:auth/auth", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// App setup
app.use(morgan("combined")); // --> middleware (morgan is a logging framework)
app.use(cors());
app.use(bodyParser.json({ type: "*/*" })); // --> change it to a JSONs
router(app);

// server setup
const port = process.env.PORT || 4000;
// http is native node library
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on: ", port);
