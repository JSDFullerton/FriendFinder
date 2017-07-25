// REQUIRED PACKAGES & AVENGERS TEAM FILE
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// SET-UP EXPRESS APP
var app = express();

// PORT FOR HEROKU
var PORT = process.env.PORT || 8080;


// EXPRESS APP - handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ROUTE FILES - HTML & API
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


// ACTIVATE SERVER LISTENING FUNC
app.listen(PORT, function() {

  console.log("APP IS LISTENING ON: " + PORT);

});// close app listen func
