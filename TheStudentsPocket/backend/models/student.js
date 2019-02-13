// A data model using a Scheme interface to represent the student
// Variables
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define a student schema
const StudentSchema = new Schema({
    student_id: {
        type: String,
        required: true
    },
    student_firstName: {
        type: String,
        required: true
    },
    student_lastName: {
        type: String,
        required: true
    },
    student_pin: {
        type: Number,
        required: true
    },
    subject_info: {
        subject_name: {
            type: String
        },
        subject_desc: {
            type: String
        },
        // == GRADE =====================
        subject_grade: {
            grade: {
                type: String
            },
            current_grade:{
              type: String
            },
            grade_weight: {
                type: Number
            }
        }, //End subject_grade

        // == Timetable ================
        timetable: {
            day: {
                type: String
            },
            time: {
                type: String
            },
            room: {
                type: String
            }
        },//End timetable
    }, //End subject_info
});

// Compile model from schema
module.exports = mongoose.model('Student', StudentSchema);
