// Declares Express dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override');

// Configures Express server
var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.urlencoded({
	extended: 5000
}));// Parse application/x-www-form-urlencoded
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(logger('dev'));
app.use(methodOverride('_method'));// override with POST having ?_method=DELETE

// Makes public a static directory
app.use(express.static(process.cwd() + '/public'));

// Routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Listening
db.sequelize.sync({ force: true }).then(function() {
	app.listen(app.get('port'), function() {
	  console.log("Express server listening on port %d in %s mode", 
	  this.address().port, app.settings.env);
	});
});