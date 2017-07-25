// REQUIRED FILES & PACKAGES
var avengerData = require ('../data/friends');


// EXPORT API MODLE FOR USE IN MAIN SERVER.JS
module.exports = function (app) {


// GET - DISPLAY POTENTIAL AVENGERS TEAMMATES ONLY
	app.get('/api/team', function (req, res){
		res.json(avengerData);
	});

// POST - GET SURVERY INFO FROM USER & DISPLAY BEST TEAMMATE
	app.post('/api/team', function (req, res){

		var smallestScore = 0;
		var bestMatch;

		for (var i=0; i<avengerData.length; i++){
			var compArray = [];

			for (var j=0; j< avengerData[i].scores.length; j++){
				compArray.push(Math.abs(avengerData[i].scores[j] - req.body.scores[j]));
			}

			var matchScore = compArray.reduce((a,b) => a+b, 0);

			if(smallestScore == 0){
				smallestScore = matchScore;
			}

			if (matchScore < smallestScore){
				smallestScore = matchScore;

				bestMatch = avengerData[i];
			}
		}

		res.json(bestMatch);

		avengerData.push(req.body);
	});
}