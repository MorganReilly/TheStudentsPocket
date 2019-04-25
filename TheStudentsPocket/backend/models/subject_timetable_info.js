//Variables
let sql = require('../config/config.js');

/* @title Subject timetable model.
 * @desc this class is used as the model class for the table 'subject_timetable_info' for the applications database.
 * This allows CRUD queries to be run on the database.
 */

// Timetable Constructor:
let Timetable = function (timetable) {
    this.student_id = timetable.student_id;
    this.subject_name = timetable.subject_name;
    this.subject_room = timetable.subject_room;
    this.subject_day = timetable.subject_day;
    this.subject_period = timetable.subject_period;
};

// POST a new timetable entry
Timetable.createEntry = function (newEntry, result) {
    sql.query('INSERT INTO subject_timetable_info set ?', newEntry, function (err, res) {
        if (err) {
            console.log(err);
            result(err, null)
        } else { // else send the result
            // Log inserted grade information to console
            console.log(res.newEntry);
            result(null, res.newEntry);
        }//End if else
    });
};

// Get all timetable entrys:
Timetable.getAllEntrys = function (student_id, result) {
    sql.query('SELECT * from subject_timetable_info where student_id = ? order by subject_day, subject_period asc;', [student_id], function (err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

// Get a entry by its ID:
Timetable.getEntry = function (student_id, id, result) {
    sql.query('SELECT * from subject_timetable_info where student_id = ? AND id = ? ', [student_id, id], function (err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

// Get a entry by its ID:
Timetable.getEntryByDay = function (student_id, dayOfWeek, result) {
    sql.query('SELECT * from subject_timetable_info where student_id = ? AND subject_day = ?', [student_id, dayOfWeek], function (err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

// Delete a timetable entry from the database:
Timetable.delete = function (student_id, id, result) {
    sql.query('DELETE from subject_timetable_info where student_id = ? AND id = ? ', [student_id, id], function (err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            result(null, res)
        }
    });
};

// Update a timetable entry:
Timetable.update = function (updatedEntry, student_id, id, result) {
    sql.query("UPDATE subject_timetable_info SET ? WHERE student_id = ? AND id = ?", [updatedEntry, student_id, id], function (err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

module.exports = Timetable;