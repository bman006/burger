require("dotenv").config();
var keys = require(`../keys.js`);

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'heroku',
  user     : keys.sqlLogin.sqlUser,
  password : keys.sqlLogin.sqlPassword,
  database : 'burgers_db'
});
 
connection.connect();
 
module.exports = connection;