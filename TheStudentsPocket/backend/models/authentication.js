//Variables
let sql = require('../config/config.js');

// Constructor for Student Login (Authentication class )
let StudentLogin = function (student) {
    this.student_id = student.student_id;
    this.student_pin = student.student_pin;
};

StudentLogin.auth = function (student_id, student_pin, result) {
    //Run query
    sql.query('SELECT * from student_info WHERE student_id=? AND student_pin=?', [student_id, student_pin], function (err, res) {
        if (res.length > 0) {
            //Check data passed in request to the data from the sql query:
            student_id = res[0].student_id;
            student_pin = res[0].student_pin;

            // Return the result:
            result(null, res.authData = {
                success: true,
                message: 'User has been authenticated',
            });
        } else {
            result(err, res.authData = {
                success: false,
                message: 'User login information is not correct or in the database.'
            });
        }//End if else
    });
};
module.exports = StudentLogin;