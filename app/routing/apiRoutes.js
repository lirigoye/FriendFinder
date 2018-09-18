var friendsArray = require("../data/friends.js");

module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(friendsArray);
	});
	
	app.post("/api/clear", function() {
		friendsArray = [];
		console.log(friendsArray);
	});
	app.post("/api/friends", function(req, res) {
  		var newFriends = req.body;
 		 console.log(newFriends);
  		if (friendsArray.length < 5) {
			friendsArray.push(newFriends);
			res.json(true);
		}
	});
};