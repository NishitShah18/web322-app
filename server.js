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

var HTTP_PORT = process.env.PORT || 8080;

var express = require("express");
var app = express();

const path = require("path");
const blogService = require("./blog-service.js");

app.use(express.static(path.join(__dirname + "/public")));

function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

app.get("/", (req, res) => {
  res.redirect("/about");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/blog", (req, res) => {
  blogService
    .getPublishedPosts()
    .then((data) => {
      res.json(data);
    })
    .catch(function (err) {
      console.log("Unable to open the file: " + err);
    });
});

app.get("/posts", (req, res) => {
  blogService
    .getAllPosts()
    .then((data) => {
      res.json(data);
    })
    .catch(function (err) {
      console.log("Unable to open the file: " + err);
    });
});

app.get("/categories", (req, res) => {
  blogService
    .getCategories()
    .then((data) => {
      res.json(data);
    })
    .catch(function (err) {
      console.log("Unable to open the file: " + err);
    });
});

app.get("*", (req, res) => {
  res.status(404).sendFile(__dirname + "/views/404/error.html");
});

blogService
  .initialize()
  .then(function () {
    app.listen(HTTP_PORT, onHttpStart);
  })
  .catch(function (err) {
    console.log("Unable to open the file: " + err);
  });
