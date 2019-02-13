// Variables
let express = require('express');
let router = express.Router();
let Student = require('../models/Student');

// ALLOW ACCESS-CONTROL -  added the following lines to your server to avoid a CORS error
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS"); //Needed to stop access control error with methods
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//REQUEST ROUTES // TO BE COMPLETE
//More requests to be added.
/**
 * @title GET REQUEST, find().
 * @desc gets a student from the database by student ID Number and name.
 * @note executes immediately, passing results to callback. Logs the data to the server console.
 */
router.get('/students', function (req, res) {
    Student.find({}, function (err, studentData) {  //function take error argument to handle any errors. Second parameters is data coming back from the server.
        if (err) return res.status(500).send("There was a problem finding student records"); // Return error, error status and send back message
        res.status(200).send(studentData);
        console.log("\nStudent Records retrieved from the database");
    });// End find
}); // End GET REQUEST

/**
 * @title CREATE STUDENT REQUEST.
 * @desc posts the created student object to the database.
 * @note pass a spread of docs and a callback. Logs the data to the server console.
 */
router.post('/students', function (req, res) {
    //Wrap in a response to be used to display message on server console.
    let reg_student = {
        student_id: req.body.student_id,
        student_firstName: req.body.student_firstName,
        student_lastName: req.body.student_lastName,
        student_pin: req.body.student_pin
    };
    console.log('\nStudent added\n', reg_student, '\n'); // Display response

    //Create an account with student data, delivered to mlabs server
    Student.create(reg_student, function (err, user) { //function take error argument to handle any errors. Second parameters is data coming back from the server.
        if (err) return res.status(500).send("There was a problem adding the information to the database."); // Return error, error status and send back message
        //Saved
        res.status(200).send(user);// Send back status, request complete.
    });//End create
});//End POST REQUEST function

// Export router as a module.
module.exports = router;

