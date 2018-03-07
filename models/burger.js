var orm = require(`../config/orm.js`);

var burger = {
    //Get all burgers to fill out the page on load
    all: function(cb) {
        orm.selectAll(`burgers`, function(result) {
            cb(result);
        });
    },
    //Add another burger to the list of burgers to eat
    create: function(val, cb) {
        orm.insertOne(`burgers`, `burger_name`, val, function(result) {
            cb(result);
        });
    },
    //Devoure a burger, moving it to the devoured section of the page
    update: function(id, cb) {
        orm.updateOne(`burgers`, `devoured`, true, `id`, id, function(result) {
            cb(result);
        })
    }
}

module.exports = burger;