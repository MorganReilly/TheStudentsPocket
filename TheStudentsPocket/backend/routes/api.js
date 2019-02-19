// Variables
let express = require('express');
let router = express.Router();
// Import StudentInfo model:
let StudentInfo = require('../models/student_info');

/**
 * @title GET REQUEST, getAllStudentInfo()
 * @desc gets all students info from the database.
 * @note executes immediately, passing results to callback. Logs the data to the server console.
 */
router.get('/students', function (req, res) {
    StudentInfo.getAllStudentsInfo(function (err, data) {
        if (err) res.send(err);
        console.log(data);
        //Complete! sendback
        res.send(data);
    });
}); // End GET REQUEST

/**
 * @title CREATE STUDENT REQUEST.
 * @desc posts the created student object to the database.
 * @note executes immediately, passing results to callback. Logs the data to the server console.
 */
router.post('/students', function (req, res) {
    //New student object created from values passed in the body of the URL POST Request
    let new_student = new StudentInfo({
        student_id: req.body.student_id,
        student_first_name: req.body.student_first_name,
        student_last_name: req.body.student_lastName
    });

    // Handle for null errors if any
    if (!new_student.student_id || !new_student.student_first_name || !new_student.student_last_name) {
        res.status(400).send({error: true, message: 'Please provide all criteria!'});
    } else {
        StudentInfo.createStudent(new_student, function (err, data) {
            if (err) res.send(err);
            //Complete!
            res.json(data); //sendback request
        });
    }// End if else
});//End POST REQUEST function

/**
 * @title DELETE REQUEST
 * @desc deletes a subject by its id number from the database.
 * @note executes immediately, passing results to callback. Logs the data to the server console.
 */
router.delete('/students/:id', function (req, res) {
        StudentInfo.delete( req.params.taskId, function(err, data) {
        if (err) res.send(err);
        //Complete!
        res.json({ message: 'Student successfully deleted' }, data);
    });
});//End DELETE REQUEST

// Export router as a module.
module.exports = router;

