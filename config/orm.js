var connection = require(`./connection.js`);

var orm = {
    //Get all data from table
    selectAll: function(table, cb) {
        var queryString = `SELECT * FROM ${table}`;
        connection.query(queryString, function(err, results) {
            if (err) {throw err;}
            cb(results);
        });
    },
    //Add another entry to the table
    insertOne: function(table, col, val, cb) {
        var queryString = `INSERT INTO ${table} (${col}) VALUES ("${val}")`;
        connection.query(queryString, function(err, results) {
            if (err) {throw err;}
            cb(results);
        });
    },
    //Update a value in the table
    updateOne: function(table, colToChange, newValue, conditionCol, conditionVal, cb) {
        var queryString = `UPDATE ${table} SET ${colToChange}=${newValue} WHERE ${conditionCol}=${conditionVal}`;
        connection.query(queryString, function(err, results) {
            if (err) {throw err;}
            cb(results);
        });
    }
}

module.exports = orm;