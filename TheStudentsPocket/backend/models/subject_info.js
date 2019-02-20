//Variables
let sql = require('../config/config.js');

/* @title Subject grade model.
 * @desc this class is used as the model class for the table 'subject_info' for the applications database.
 * This allows CRUD queries to be run on the database.
 */

// Subject gradeConstructor:
let SubjectInfo = function (subject) {
    this.student_id = subject.student_id;
    this.subject_name = subject.subject_name;
    this.subject_desc = subject.subject_desc;
};

// Create a new subject record for a student
SubjectInfo.createSubject = function createSubject(newSubject, result) {
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
SubjectInfo.getAllSubjectInfo = function (student_id, result) {
    sql.query('SELECT * from subject_info where student_id = ?', [student_id], function (err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

// Get a subject;
SubjectInfo.getSubject = function (student_id, id, result) {
    sql.query('SELECT * from subject_info where student_id = ? AND id = ? ', [student_id, id], function (err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

// Update a subject record
SubjectInfo.update = function (updatedSubject, id, result) {
    sql.query("UPDATE subject_info SET ? WHERE id = ?", [updatedSubject, id], function (err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

// Delete a subject from a students record in the database:
SubjectInfo.delete = function (id, result) {
    sql.query('DELETE from subject_info WHERE id = ?', [id], function (err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            result(null, res)
        }
    });
};

module.exports = SubjectInfo;