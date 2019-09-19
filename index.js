// index.js
const express = require("express"); // import express library
const app = express(); // initialize express app
const PORT = process.env.PORT || 3000;
let user = require("./respon-body");

// setup a `/` endpoint
app.get("/", (req, res, next) => res.send("Welcome stalker!"));

// setup a `/hello` endpoint
app.get("/hello", (request, response, next) => {
  response.send({
    message: "Hello!",
    data: user
  });
});

// setup server to listen on port :9999
app.listen(PORT, () =>
  console.log(`Express server is ready on port: ${PORT}`)
);
