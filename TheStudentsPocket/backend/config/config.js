// MySQL Server connection parameters:
let mysql = require('mysql');

let connection = mysql.createConnection({
    host: "ppit.caevmcdxjhby.eu-west-1.rds.amazonaws.com",
    user: "cathalmorgan",
    password: "Admin2019"
});

// Connect to the mysql database.
connection.connect(function (err) {
    if (err) throw err;
});

// Export connection
module.exports = connection;