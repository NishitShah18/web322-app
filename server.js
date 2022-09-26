/*********************************************************************************
 *  WEB322 – Assignment 2
 *  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students.
 *
 *  Name: Nishit Shah Student ID: 130 176 217 Date: 26th Sept 2022
 *
 *  Online (Cyclic) URL:
 *
 ********************************************************************************/

//o The server must listen on process.env.PORT || 8080
var HTTP_PORT = process.env.PORT || 8080;

//o	The server must make use of the "express" module
var express = require("express");
var app = express();

app.use(express.static(path.join(__dirname + "/public")));

//o	The server must output: "Express http server listening on port" - to the console, where port is the port the server is currently listening on (ie: 8080)
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

//o	The route "/" must redirect the user to the "/about" route – this can be accomplished using res.redirect() (see week 4 "Response object")
app.get("/", (req, res) => {
  res.redirect("/about");
});

//o	The route "/about" must return the about.html file from the views folder
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

//o	NOTE: for your server to correctly return the "/css/main.css" file, the "static" middleware must be used:  in your server.js file, add the line: app.use(express.static('public')); before your "routes" (see week 4 "Serving static files")
// on line : 20

//Well, this is must!!
app.listen(HTTP_PORT);
