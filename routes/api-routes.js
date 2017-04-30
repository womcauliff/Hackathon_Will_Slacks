// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  //POST route for slack events
  app.post("/api/slack", function(req, res) {

  	console.log(req.body);

  	//checks verification token to confirm message is from Slack
  	if(req.body.token !== process.env.SLACK_TOKEN) {
  		console.log("Token mismatch: " + req.body.token);
  		return res.status(403).send("Token mismatch.");
  	}

    //checks that a message was written by the target user
	  if(req.body.event.type == "message" &&
    req.body.event.user == process.env.TARGET_ID) {
			db.Message.create({
				text: req.body.event.text,
				channel: req.body.event.channel,
				ts: req.body.event_time
			}).then(function(dbMessage) {
				console.log("added: " + JSON.stringify(dbMessage));
				res.status(200).send("ok");
			}).catch(function(err) {
				console.log(err);
				res.status(500).send(err);
			});
    }
    //this message will not be added
    else {
			console.log("not adding this message");
			res.status(200).send("ok");
    }
  });
};