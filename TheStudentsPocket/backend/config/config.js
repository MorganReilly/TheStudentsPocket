// MySQL Server connection parameters:
let mysql = require('mysql');

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "the_students_pocket"
});

// Connect to the mysql database.
connection.connect(function (err) {
    if (err) throw err;
    console.log("Connect to MySQL Server - PPIT")
});

// Export connection
module.exports = connection;