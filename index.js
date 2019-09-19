
// setting port
const http = require("http");

const hostname = "127.0.0.1";
const port = 8888;
let user = require("./respon-body");
let router = require("./routes");

const PORT = process.env.PORT || 3000;


const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain");
    res.end("hello world ")
}
);

server.listen(port, hostname, () => {
    console.log('server running at http://${127.0.0.1}:${8888}/');
})




// index.js
const express = require("express"); // import express library
const app = express(); // initialize express app

// setup a `/` endpoint
app.get("/", (req, res, next) => res.send("Welcome!"));

// setup a `/hello` endpoint
app.get("/hello", (request, response, next) => {
  response.send({
    message: "Hello!", data: user, 
    
  });
});



// setup server to listen on port :9999
app.listen(9999, () =>
  console.log("Express server is ready on localhost:3000")
);

