// REQUIRED PACKAGES & FRIENDS FILE
	var friendsData = require("../data/firends.js");


// EXPORT API MODULE FOR USE IN MAIN SERVER.JS

	module.exports = function(app) {

		// GET - DISPLAY POTENTIAL FRIENDS ONLY
			app.get("/api/friends", function(req, res) {

				res.json(friendsData);

			});// close api friends get


		// POST - GET SURVERY INFO FROM USER & DISPLAY FRIEND MATCH (difference in total scores - use Math.abs for absolute value)
			api.post("api/friends", function(req, res) {

				var lowestScore = 0;
				var friendMatch = "";

				for (var i = 0; i < friendsData.length; i++) {
					
					var friendsArr = [];


					for (var j = 0; j < friendsData[i].scores.length; j++) {

						friendsArr.push(Math.abs(friendsData[i].scores[j] - req.body.scores[j]));

					}// close loop #2


					// Match user score to closest existing friend score in Friends Array
					var matchScore = friendsArr.reduce((a,b) => a + b, 0);

					if (lowestScore == 0) {
						lowestScore = matchScore;
					}

					if (matchScore < lowestScore) {
						lowestScore = matchScore

						friendMatch = friendsData[i];
					};

					// SEND MATCH TO USER AS JSON
					res.json(friendMatch);

					// SEND USER DATA TO POSSILBE FRIENDS ARRAY OBJECT
					friendsData.push(req.body);



				}// close loop #1

			}// close api post funct.

	}// close export module funct