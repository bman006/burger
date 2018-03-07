var express = require(`express`);
var router = express.Router();
var burger = require(`../models/burger.js`);
var exphbs = require(`express-handlebars`);

//Home page
router.get("/", function(req, res) {
    //Get all burger data from database
    burger.all(function(data) {
        //change format of data for use in handlebars
        var burgerObject = {
            burger: data
        };
        //Render page
        res.render("index", burgerObject)
    });
});

//Add a burger to the page
router.post("/api/:burger", function(req, res) {
    //Add new burger to the database
    burger.create(req.params.burger, function(data) {
        //Send back the full row of data for the new burger
        res.json({ 
            id: data.id,
            burger_name: data.burger_name,
            devoured: data.devoured
        });
    });
});

//Devour a burger
router.put("/api/devour/:id", function(req, res) {
    //Devour the burger, changing the corresponding boolean value in the table
    burger.update(req.params.id, function(data) {
        //Send back the now updated row of data for the burger
    });
});

module.exports = router;