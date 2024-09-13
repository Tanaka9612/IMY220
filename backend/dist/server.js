"use strict";

var express = require("express");

//create app
var app = express();

//serve static page in the public directory
app.use(express["static"]('frontend/public'));

//port to listen to
app.listen(1337, function () {
  console.log("listening on localhost:1337");
});