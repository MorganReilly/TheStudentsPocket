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
    student_lastName:{
        type: String,
        required: true
    },
    student_pin: {
        type: Number,
        required: true
    }
});

// Compile model from schema
module.exports = mongoose.model('Student', StudentSchema);
