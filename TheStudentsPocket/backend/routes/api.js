// Variables
let express = require('express');
let router = express.Router();
let StudentInfo = require('../models/student_info');
let SubjectInfo = require('../models/subject_info');
let StudentLogin = require('../models/authentication');
let Grade = require('../models/subject_grade_info');
let Timetable = require('../models/subject_timetable_info');
let activeSession; // User session variable

router.get('/admin', function (req, res) {

    console.log('Admin inbound request')
    res.send('ADMIN BACKEND!')

});

/**
 * @title GET REQUEST, Middleware.
 * @desc check for logged-in users with a active session.
 * @note executes immediately, passing results to callback.
 */
router.get('/auth', function (req, res) {
    activeSession = req.session;
    console.log(activeSession); // Log session details to server console
    activeSession.student_id = req.session.student_id; // User student id number added to active session
    console.log(activeSession.student_id); // Log student_id number from active session to console
    console.log('Cookie:', req.cookies.cookie_monster);
    if (activeSession.student_id && req.cookies.cookie_monster) {
        res.send(res.isLoggedIn = { //Respond to isLoggedIn interface with true as the user is logged-in
            status: true
        });
    } else {
        //Authentication request fail return false:
        res.send(res.isLoggedIn = { //Respond to isLoggedIn interface with true as the user is logged-in
            status: false
        });
        console.log('Authentication request fail!');
    }// End if else
});

//====== Auth function for user login ===========================================================================
/**
 * @title POST REQUEST, Authentication().
 * @desc checks the database with the parameters passed to see if a user exits.
 * @note executes immediately, passing results to callback. If a user is authenticated a session cookies is issued.
 * Logs the data to the server console.
 */
router.post('/auth', function (req, res) {
    StudentLogin.auth(req.body.student_id, req.body.student_pin, function (err, data) {
        if (err) res.send(err); //SQL Error handle
        //Complete! sendback
        if (data.success) { // Hand out cookie if auth is = true
            console.log(data.success);
            //User has been authenticated set cookie & session.
            req.session.student_id = req.body.student_id;
            // sendback
            res.send(data);
        } else {// end if else
            res.send(data)// sendback
        } // End if else.
    });
});

/**
 * @title GET REQUEST
 * @desc request to log a user out and clear the cookie
 */
router.get('/logout', function (req, res) {
    if (activeSession.student_id && req.cookies.cookie_monster) {
        res.clearCookie('cookie_monster'); // Clear cookie
        res.send(true); // Logout request complete, return true
        console.log('Successful Logout!');
    } else {
        res.send(false) // if request failed so return false
    }// End if else
});


// ====== START STUDENT_INFO ROUTES ==============================================================================
/**
 * @title GET REQUEST, getDetails()
 * @desc gets a students info from the database by the student id number.
 * @note executes immediately, passing results to callback. Logs the data to the server console.
 */
router.get('/students/student', function (req, res) {
    StudentInfo.getDetails(activeSession.student_id, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            console.log(data);
            //Complete! sendback
            res.send(data);
        }
    });
}); // End GET REQUEST

/**
 * @title GET REQUEST, getAllStudentInfo()
 * @desc gets all students info from the database.
 * @note executes immediately, passing results to callback. Logs the data to the server console.
 */
router.get('/students', function (req, res) {
    StudentInfo.getAllStudentsInfo(function (err, data) {
        if (err) {
            res.send(err);
        } else {
            console.log(data);
            //Complete! sendback
            res.send(data);
        }// end if else
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
        student_last_name: req.body.student_last_name,
        student_pin: req.body.student_pin
    });

    // Handle for null errors if any
    if (!new_student.student_id || !new_student.student_first_name || !new_student.student_last_name) {
        res.status(400).send({error: true, message: 'Please provide all criteria!'});
    } else {
        StudentInfo.createStudent(new_student, function (err, data) {
            if (err) {
                res.send({status: false, errorCode: err.code, message: err.message});
            } else {
                //Complete!
                res.json({status: true, errorCode: null, message: data}); //sendback request
            }// end if else
        });
    }// End if else
});//End POST REQUEST function

/**
 * @title DELETE REQUEST
 * @desc deletes a student by its id number from the database.
 * @note executes immediately, passing results to callback. Logs the data to the server console.
 */
router.delete('/students/:id', function (req, res) {
    StudentInfo.delete(req.params.student_id, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            //Complete!
            res.json({message: 'Student successfully deleted'}, data);
        }
    });
});//End DELETE REQUEST

// ====== END STUDENT_INFO ROUTES ================================================================================
// ====== START SUBJECT_INFO ROUTES ==============================================================================

/**
 * @title GET ALL SUBJECTS REQUEST, getAllSubjectInfo()
 * @desc gets all students info from the database.
 * @note executes immediately, passing results to callback. Logs the data to the server console.
 */
router.get('/students/subjects/', function (req, res) {
    SubjectInfo.getAllSubjectInfo(activeSession.student_id, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            console.log(data);
            //Complete! sendback
            res.send(data);
        }// end if else
    });
}); // End GET REQUEST

/**
 * @title GET SUBJECT REQUEST, getSubject()
 * @desc gets a subject from a students records by the subject ID
 * @note executes immediately, passing results to callback. Logs the data to the server console.
 */
router.get('/students/subjects/subject/:id', function (req, res) {
    console.log(activeSession.student_id, req.params.id);
    SubjectInfo.getSubject(activeSession.student_id, req.params.id, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            //Complete! sendback
            console.log(data);
            res.send(data);
        }
    });
}); // End GET REQUEST


/**
 * @title CREATE NEW SUBJECT REQUEST.
 * @desc posts the created student object to the database.
 * @note executes immediately, passing results to callback. Logs the data to the server console.
 */
router.post('/students/subjects/', function (req, res) {
    //New student object created from values passed in the body of the URL POST Request
    let new_subject = new SubjectInfo({
        student_id: activeSession.student_id,
        subject_name: req.body.subject_name,
        subject_desc: req.body.subject_desc
    });

    console.log(activeSession.student_id, req.body.subject_name, req.body.subject_desc);

    // Handle for null errors if any
    if (!new_subject.student_id || !new_subject.subject_name) {
        res.status(400).send({error: true, message: 'Please provide all criteria!'});
    } else {
        SubjectInfo.createSubject(new_subject, function (err, data) {
            if (err) {
                res.send({status: false, errorCode: err.code, message: err.message});
            } else {
                //Complete!
                res.send({status: true, errorCode: null, message: data}); //sendback request
            }
        });
    }// End if else
});//End POST REQUEST function

/**
 * @title PUT REQUEST, UPDATE().
 * @desc finds a subject by its id number in the database and updates it.
 * @note executes immediately, passing results to callback. Logs the data to the server console.
 */
router.put('/students/subjects/subject/:id', function (req, res) {
    //New student object created from values passed in the body of the URL POST Request
    let updatedSubject = {
        subject_name: req.body.subject_name,
        subject_desc: req.body.subject_desc
    };

    console.log(updatedSubject);
    // Handle for null errors if any
    if (!updatedSubject.subject_name) {
        res.status(400).send({error: true, message: 'Please provide a subject name'});
    } else {
        SubjectInfo.update(updatedSubject, activeSession.student_id, req.params.id, function (err, data) {
            if (err) {
                res.send({status: false, message: err.message});
            } else {
                //Complete!
                res.json({status: true, message: data}); //sendback request
            }
        });
    }// End if else
});//End POST REQUEST function


/**
 * @title DELETE REQUEST
 * @desc deletes a subject by its id number from the database.
 * @note executes immediately, passing results to callback. Logs the data to the server console.
 */
router.delete('/students/subjects/:id', function (req, res) {
    SubjectInfo.delete(req.params.id, activeSession.student_id, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            //Complete!
            res.send(data);
        }
    });
});//End DELETE REQUEST

// ====== END SUBJECT_INFO ROUTES ================================================================================
// ====== START SUBJECT_GRADE ROUTES =============================================================================

/**
 * @title GET REQUEST, getAllSubjectInfo()
 * @desc gets all students info from the database.
 * @note executes immediately, passing results to callback. Logs the data to the server console.
 */
router.get('/students/subjects/grades', function (req, res) {
    Grade.getAllGrades(activeSession.student_id, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            console.log(data);
            //Complete! sendback
            res.send(data);
        }
    });
}); // End GET REQUEST

/**
 * @title CREATE GRADE REQUEST.
 * @desc posts the created student object to the database.
 * @note executes immediately, passing results to callback. Logs the data to the server console.
 */
router.post('/students/subjects/grades', function (req, res) {
    //New student object created from values passed in the body of the URL POST Request
    let new_grade = new Grade({
        student_id: activeSession.student_id,
        subject_name: req.body.subject_name,
        grade_type: req.body.grade_type,
        grade_weight: req.body.grade_weight,
        curr_grade: req.body.curr_grade
    });

    // Handle for null errors if any
    if (!new_grade.student_id || !new_grade.subject_name) {
        res.status(400).send({error: true, message: 'Please provide all criteria!'});
    } else {
        Grade.createGrade(new_grade, function (err, data) {
            if (err) {
                res.send({status: false, message: err.message});
            } else {
                //Complete!
                res.json({status: true, message: data}); //sendback request
            }
        });
    }// End if else
});//End POST REQUEST function

/**
 * @title PUT REQUEST, UPDATE().
 * @desc finds a subject by its id number in the database and updates it.
 * @note executes immediately, passing results to callback. Logs the data to the server console.
 */
router.put('/students/subjects/grades/:id', function (req, res) {
    //New student object created from values passed in the body of the URL POST Request
    let updatedGrade = {
        subject_name: req.body.subject_name,
        grade_type: req.body.grade_type,
        grade_weight: req.body.grade_weight,
        curr_grade: req.body.curr_grade
    };

    console.log(updatedGrade);
    // Handle for null errors if any
    if (!updatedGrade.subject_name) {
        res.status(400).send({error: true, message: 'Please provide a grade name'});
    } else {
        Grade.update(updatedGrade, activeSession.student_id, req.params.id, function (err, data) {
            if (err) {
                res.send({status: false, message: err.message});
            } else {
                //Complete!
                res.json({status: true, message: data}); //sendback request
            }
        });
    }// End if else
});//End POST REQUEST function


/**
 * @title GET GRADE REQUEST, getGrade()
 * @desc gets a grade from a students records by the grade ID
 * @note executes immediately, passing results to callback. Logs the data to the server console.
 */
router.get('/students/subjects/grade/:id', function (req, res) {
    console.log(activeSession.student_id, req.params.id);
    Grade.getGrade(activeSession.student_id, req.params.id, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            //Complete! sendback
            console.log(data);
            res.send(data);
        }
    });
}); // End GET REQUEST

/**
 * @title DELETE REQUEST
 * @desc deletes a subject by its id number from the database.
 * @note executes immediately, passing results to callback. Logs the data to the server console.
 */
router.delete('/students/subjects/grades/:id', function (req, res) {
    Grade.delete(activeSession.student_id, req.params.id, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            //Complete!
            res.send(data);
        }
    });
});//End DELETE REQUEST

// ====== END SUBJECT_GRADE ROUTES ================================================================================
// ====== START SUBJECT_TIMETABLE_INFO ROUTES =====================================================================

/**
 * @title GET REQUEST, getAllEntrys()
 * @desc gets all timetable entrys info from the database.
 * @note executes immediately, passing results to callback. Logs the data to the server console.
 */
router.get('/students/subjects/timetable', function (req, res) {
    Timetable.getAllEntrys(activeSession.student_id, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            console.log(data);
            //Complete! sendback
            res.send(data);
        }
    });
}); // End GET REQUEST

/**
 * @title CREATE TIMETABLE REQUEST.
 * @desc posts the created student object to the database.
 * @note executes immediately, passing results to callback. Logs the data to the server console.
 */
router.post('/students/subjects/timetable', function (req, res) {
    //New student object created from values passed in the body of the URL POST Request
    let new_entry = new Timetable({
        student_id: activeSession.student_id,
        subject_name: req.body.subject_name,
        subject_room: req.body.subject_room,
        subject_day: req.body.subject_day,
        subject_period: req.body.subject_period
    });

    // Handle for null errors if any
    if (!new_entry.student_id || !new_entry.subject_name) {
        res.status(400).send({error: true, message: 'Please provide all criteria!'});
    } else {
        Timetable.createEntry(new_entry, function (err, data) {
            if (err) {
                res.send({status: false, message: err.message});
            } else {
                //Complete!
                res.json({status: true, message: data}); //sendback request
            }
        });
    }// End if else
});//End POST REQUEST function

/**
 * @title PUT REQUEST, UPDATE().
 * @desc finds a subject by its id number in the database and updates it.
 * @note executes immediately, passing results to callback. Logs the data to the server console.
 */
router.put('/students/subjects/timetable/:id', function (req, res) {
    //New student object created from values passed in the body of the URL POST Request
    let updatedTimetableEntry = {
        subject_name: req.body.subject_name,
        subject_room: req.body.subject_room,
        subject_day: req.body.subject_day,
        subject_period: req.body.subject_period
    };

    console.log(updatedTimetableEntry);
    // Handle for null errors if any
    if (!updatedTimetableEntry.subject_name) {
        res.status(400).send({error: true, message: 'Please provide a grade name'});
    } else {
        Timetable.update(updatedTimetableEntry, activeSession.student_id, req.params.id, function (err, data) {
            if (err) {
                res.send({status: false, message: err.message});
            } else {
                //Complete!
                res.json({status: true, message: data}); //sendback request
            }
        });
    }// End if else
});//End POST REQUEST function


/**
 * @title GET TIMETABLE ENTRY REQUEST, getGrade()
 * @desc gets a grade from a students records by the grade ID
 * @note executes immediately, passing results to callback. Logs the data to the server console.
 */
router.get('/students/subjects/timetable/:id', function (req, res) {
    console.log(activeSession.student_id, req.params.id);
    Timetable.getEntry(activeSession.student_id, req.params.id, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            //Complete! sendback
            console.log(data);
            res.send(data);
        }
    });
}); // End GET REQUEST

/**
 * @title GET TIMETABLE ENTRY BY DAY REQUEST, getEntryByDay()
 * @desc gets a grade from a students records by the grade ID
 * @note executes immediately, passing results to callback. Logs the data to the server console.
 */
router.get('/students/subjects/timetable/:subject_day', function (req, res) {
    console.log(activeSession.student_id, req.params.subject_day);
    Timetable.getEntryByDay(activeSession.student_id, req.params.subject_day, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            //Complete! sendback
            console.log(data);
            res.send(data);
        }
    });
}); // End GET REQUEST

/**
 * @title DELETE REQUEST
 * @desc deletes a subject by its id number from the database.
 * @note executes immediately, passing results to callback. Logs the data to the server console.
 */
router.delete('/students/subjects/timetable/:id', function (req, res) {
    Timetable.delete(activeSession.student_id, req.params.id, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            //Complete!
            res.send(data);
        }
    });
});//End DELETE REQUEST

// Export router as a module.
module.exports = router;