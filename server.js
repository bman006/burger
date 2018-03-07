var express = require(`express`);
var bodyParser = require(`body-parser`);
var path = require(`path`);
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require(`./controllers/burgers_controller.js`);
app.use(routes);

app.listen(PORT, function() {
    console.log(`App listening on PORT ` + PORT);
});