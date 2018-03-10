require("dotenv").config();
var keys = require(`../keys.js`);
var mysql      = require('mysql');

if (process.env.JAWSDB_URL) {

}
else {
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : keys.sqlLogin.sqlUser,
    password : keys.sqlLogin.sqlPassword,
    database : 'burgers_db'
  });
}
 
connection.connect();
module.exports = connection;