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
        student_pin: req.body.student_pin,
        subject_info: [{
            subject_name: null, subject_desc: null,
            subject_grade: {grade: null, current_grade: null, weight: null,}, // End subject_grade
            timetable: {day: null, time: null, room: null}// End timetable
        }] // End subject_info
    };
    console.log('\nStudent added\n', reg_student, '\n'); // Display response

    //Create an account with student data, delivered to mlabs server
    Student.create(reg_student, function (err, user) { //function take error argument to handle any errors. Second parameters is data coming back from the server.
        if (err) return res.status(500).send("There was a problem adding the information to the database."); // Return error, error status and send back message
        //Saved
        res.status(200).send(user);// Send back status, request complete.
    });//End create
});//End POST REQUEST function

/**
 * @title PUT REQUEST - New Subject entries. findOneAndUpdate()
 * @desc updates a student by records by id number.
 * @note executes immediately, passing results to callback. Logs the data to the server console.
 */
router.put('/students/subjects/:student_id', function (req, res) {
    //Log message to console
    //console.log('\nSubject information added\n', subject_info, '\n');
    Student.findOneAndUpdate(
        //FIND BY STUDENT ID
        req.params.student_id, {
            $push: { //push new object into subject_info
                subject_info: {
                    subject_name: req.body.subject_name,
                    subject_desc: req.body.subject_desc
                } // End subject_info
            },//Pass new subject information to db
        }, function (err, data) {
            if (err) return res.status(500).send('There was a problem updating the students record.');
            res.status(200).send(data); //Callback
            console.log('\nStudent record was updated!\n');
        });
});

/**
 * @title GET REQUEST, find()
 * @desc gets a student by id number from the database.
 * @note executes immediately, passing results to callback. Logs the data to the server console.
 */
router.get('/students/subjects/:student_id', function (req, res) {
    Student.find({
        student_id: req.params.student_id
    }, function (err, data) {
        if (err) return res.status(500).send("There was a problem finding modules.");
        if (!data) return res.status(404).send("No module found.");
        res.status(200).send(data);
        console.log('\nModules found from database\n'); //Log the delete
        console.log(data); // LOG data received back to server console
    });
});

/**
 * @title DELETE REQUEST, findByIdAndRemove().
 * @desc deletes a subject by its id number from the database.
 * @note executes immediately, passing results to callback. Logs the data to the server console.
 */
router.delete('/students/subjects/:id', function (req, res) {
    Student.findByIdAndRemove(
        req.params.id
        , function (err, data) { //function take error argument to handle any errors. Second parameters is data coming back from the server.
            if (err) return res.status(500).send("There was a problem deleting the task.");
            res.status(200).json("Subject " + data + " was deleted.");
            console.log('\nDeleted subject from students records\n'); //Log the delete
        });
});//End DELETE REQUEST

// Export router as a module.
module.exports = router;

