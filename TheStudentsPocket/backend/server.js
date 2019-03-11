/*
    INSTALLED PACKAGES:
    npm install express --save
    npm install body-parser --save
    npm install mysql     : https://www.w3schools.com/nodejs/nodejs_mysql.asp
    npm install express-session --save
    npm install -g nodemon : https://nodemon.io/
*/
// Variables
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// Declare a variable for API route
const api = require('./routes/api');
const app = express();
const session = require('express-session');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

// saveUninitialized is set to false as we want to auth first
app.use(session({
    name: 'cookie_monster',
    key: 'seshCookie',
    secret: 'secret', //Secret for signing cookies
    resave: false, // Force save for each request
    saveUninitialized: false, // Save a session that is new, but has not been modified
    cookie: {
        expires: 3600000, //after 1 hour
    } // End cookie
}));
// Create application/x-www-form-urlencoded parser & Cors
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    if ('OPTIONS' === req.method) {
        res.status(200).send();
    } else {
        next();
    }
});

//Add API route to the endpoint URL.
app.use('/api', api); //Use API

/* Server listen, running on localhost:8081 */
const server = app.listen(8081, function () {
    console.log('SERVER INFO:', server.address());
});
// Export app as a module.
module.exports = app;