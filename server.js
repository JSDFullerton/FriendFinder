// REQUIRED PACKAGES
	var express = require("express");
	var bodyParser = require("body-parser");
	var path = require("path");
	var mysql = require ("mysql");
	var fs = require("fs");


// SET-UP EXPRESS APP
	var app = express();
	
	// PORT for HEROKU
	var PORT = process.env PORT || 8080;


// EXPRESS APP - data parsing
	app.use(bodyParser.json()):
	app.use(bodyParser.urlcoded({ extended: true }));
	app.use(bodyParser.text());
	app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// CONNECT TO MYSQL DB
	var connection = mysql.createConnection({
	  host: "localhost",
	  port: 3306,

	  // Your username
	  user: "root",

	  // Your password
	  password: "",
	  database: "friendsDB"

	});// close var connection

	connection.connect(function(err) {
  		if (err) {
  			console.log("Error connecting SQL: " + err);
  			return;
  		}
  		console.log("Connected to SQL as ID: " + connection.threadId);

	});// close DB connection func



// LISTEN TO SERVER FUNCTION
app.listen(PORT, function() {

	console.log("APP IS LISTENING ON PORT: " + PORT);

})// close app.listen func