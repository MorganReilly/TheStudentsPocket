//Variables
let sql = require('../config/config.js');

/* @title Subject grade model.
 * @desc this class is used as the model class for the table 'subject_info' for the applications database.
 * This allows CRUD queries to be run on the database.
 */

// Subject gradeConstructor:
let SubjectGrade = function (subject) {
    this.student_id = subject.student_id;
    this.subject_name = subject.subject_name;
    this.subject_desc = subject.subject_desc;
};

// Create a new subject record for a student
SubjectGrade.createSubject = function (newSubject, result) {
    sql.query('INSERT INTO subject_info set ?', newSubject, function (err, res) {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }//End if else
    });
};

// Get all subject information:
SubjectGrade.getAllSubjectInfo = function (result) {
    sql.query('SELECT * from subject_info', function (err, res) {
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
SubjectGrade.delete = function (student_id, result) {
    sql.query('DELETE FROM subject_info WHERE student_id = ?', [student_id], function (err, res) {
        if(err){
            console.log(err);
            result(null, err);
        }else {
            result(null, res)
        }
    });
};

module.exports = SubjectGrade;