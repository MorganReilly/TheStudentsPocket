//Variables
let sql = require('../config/config.js');

/* @title Student info model.
 * @desc this class is used as the model class for the table 'students_info' for the applications database.
 * This allows CRUD queries to be run on the database.
 */

// Student info Constructor:
let StudentInfo = function (student) {
    this.student_id = student.student_id;
    this.student_first_name = student.student_first_name;
    this.student_last_name = student.student_last_name;
};

//Create a new student record:
StudentInfo.createStudent = function createStudent(newStudent, result) {
    sql.query('INSERT INTO student_info set ?', newStudent, function (err, res) {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }//End if else
    });
};

// Get all students information:
StudentInfo.getAllStudentsInfo = function (result) {
    sql.query('SELECT * from student_info', function (err, res) {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

// Delete a student record from the database:
StudentInfo.delete = function (student_id, result) {
    sql.query('DELETE FROM subject_info WHERE student_id = ?', [student_id], function (err, res) {
        if(err){
            console.log(err);
            result(null, err);
        }else {
            result(null, res)
        }
    })
};

module.exports = StudentInfo;