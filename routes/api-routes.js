// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
//var db = require("../models");

//listen to slack



// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of will's comments
  app.post("/api/slack", function(request, response) {
    console.log(request.body);
    });
  };

  // POST route for saving a new message
//   app.post("/api/todos", function(req, res) {
//     // create takes an argument of an object describing the item we want to
//     // insert into our table. In this case we just we pass in an object with a text
//     // and complete property (req.body)
//     db.Todo.create({
//       text: req.body.text,
//       complete: req.body.complete
//     }).then(function(dbTodo) {
//       // We have access to the new todo as an argument inside of the callback function
//       res.json(dbTodo);
//     });
//   });
// };