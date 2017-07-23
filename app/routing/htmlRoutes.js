// REQUIRED PACKAGES
var path = require("path");


// EXPORT HTML MODULE FOR USE IN MAIN SERVER.JS
module.exports = function(app) {

	// ROUTE TO HOME HTML PAGE - using "GET"
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.htmkl"));
	});


	// ROUTE TO SURVEY PAGE - using "GET"
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/survery.html"));
	});


	// DEFAULT ROUTE IF NO MATCH
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	})


	
}// close module export










