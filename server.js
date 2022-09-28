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

var path = require("path");

//•	Your first step is to "require" this module at the top of your server.js file so that we can use it to interact with the data from server.js
var blogService = require("./blog-service.js");

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

//•	Inside your server.js add routes to respond to the following "get" requests for the application.
//  Once you have written the routes, test that they work properly by returning a confirmation string using res.send() and testing the server using localhost:8080.
//-> OKK

/*

/blog
•	This route will return a JSON formatted string containing all of the posts within the posts.json file whose published property is set to true (ie: "published" posts).

/posts
•	This route will return a JSON formatted string containing all the posts within the posts.json files

/categories
•	This route will return a JSON formatted string containing all of the categories within the categories.json file

[ no matching route ]
•	If the user enters a route that is not matched with anything in your app (ie: http://localhost:8080/app) then you must return the custom message "Page Not Found" with an HTTP status code of 404.  

*/

app.get("/blog", (req, res) => {
  res.send("Working");
});

app.get("/posts", (req, res) => {
  res.sendFile(__dirname + "/data/posts.json");
});

app.get("/categories", (req, res) => {
  res.sendFile(__dirname + "/data/categories.json");
});

app.get("*", (req, res) => {
  res.status(404).sendFile(__dirname + "/views/404/error.html");
});

//Well, this is must!!
app.listen(HTTP_PORT, onHttpStart);
