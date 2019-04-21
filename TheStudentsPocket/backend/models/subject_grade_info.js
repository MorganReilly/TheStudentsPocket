//Variables
let sql = require('../config/config.js');

/* @title Subject Grade info model.
 * @desc this class is used as the model class for the table 'subject_grades_info' for the applications database.
 * This allows CRUD queries to be run on the database.
 */

// Grade info Constructor:
let GradeInfo = function (grade) {
    this.student_id = grade.student_id;
    this.subject_name = grade.subject_name;
    this.grade_type = grade.grade_type;
    this.grade_weight = grade.grade_weight;
    this.curr_grade = grade.curr_grade;
};

// Create a new subject record for a student
GradeInfo.createGrade = function (newGrade, result) {
    sql.query('INSERT INTO subject_grade_info set ?', newGrade, function (err, res) {
        if (err.errno == 1062) { // SQL 'ER_DUP_ENTRY'
            console.log(err);
            result(err, null)
        } else { // else send the result
            // Log inserted grade information to console
            console.log(res.newGrade);
            result(null, res.newGrade);
        }//End if else
    });
};

// Get all subject information:
GradeInfo.getAllGrades = function (student_id,result) {
    sql.query('SELECT * from subject_grade_info where student_id = ?', [student_id], function (err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

//Update grade information
//TODO

// Get a grade by its ID:
GradeInfo.getGrade = function (student_id, id, result) {
    sql.query('SELECT * from subject_grade_info where student_id = ? AND id = ? ', [student_id, id], function (err, res) {
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
GradeInfo.delete = function (id, result) {
    sql.query('DELETE FROM subject_grade_info WHERE id = ?', [id], function (err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            result(null, res)
        }
    });
};

// Update a subject record
GradeInfo.update = function (updatedGrade, student_id, id, result) {
    sql.query("UPDATE subject_grade_info SET ? WHERE student_id = ? AND id = ?", [updatedGrade, student_id, id], function (err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

module.exports = GradeInfo;
