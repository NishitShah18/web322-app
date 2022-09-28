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

const { rejects } = require("assert");
const fs = require("fs"); // required at the top of my module
const { resolve } = require("path");

//Module Data
var posts = [];
var categories = [];

//initialize()
//•	This function will read the contents of the "./data/posts.json" and "./data/categories.json" file

module.exports.initialize = function () {
  return new Promise((res, rej) => {
    fs.readFile("./data/posts.json"),
      (err, data) => {
        if (err) {
          rej("unable to read file");
        } else {
          posts = JSON.parse(data);
        }
      };
    fs.readFile("./data/categories.json"),
      (err, data) => {
        if (err) {
          rej("unable to read file");
        } else {
          categories = JSON.parse(data);
        }
      };
    res();
  });
};

module.exports.getAllPosts = function () {
  return new Promise((res, rej) => {
    if (posts.length === 0) {
      rej("no results returned");
    } else {
      res(posts);
    }
  });
};

module.exports.getPublishedPosts = function () {
  return new Promise((res, rej) => {
    var filteredPosts = [];
    for (let i = 0; i < movies.length; i++) {
      if (posts[i].published === true) {
        filteredPosts.push(posts[i]);
      }
    }

    if (filteredPosts.length === 0) {
      rej("no results returned");
    } else {
      res(filteredPosts);
    }
  });
};

module.exports.getCategories = function () {
  return new Promise((res, rej) => {
    if (categories.length === 0) {
      rej("no results returned");
    } else {
      res(categories);
    }
  });
};
