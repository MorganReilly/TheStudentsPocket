/*
    INSTALLED PACKAGES:
    npm install express --save
    npm install body-parser --save
    npm install mysql     : https://www.w3schools.com/nodejs/nodejs_mysql.asp
    npm install cors      : https://www.npmjs.com/package/cors
*/
// Variables
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// Declare a variable for API route
const api = require('./routes/api');
const app = express();

// Create application/x-www-form-urlencoded parser & Cors
app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

//Add API route to the endpoint URL.
app.use('/api', api); //Use API

/* Server listen, running on localhost:8081 */
const server = app.listen(8081, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
});
// Export app as a module.
module.exports = app;