Drop DATABASE if exists the_students_pocket;
Create DATABASE the_students_pocket default CHARACTER Set = utf8 default COLLATE = utf8_general_ci;
use the_students_pocket;

Create Table student_info
(
	student_id VARCHAR(10) primary key NOT NULL,
	student_first_name varchar(30) NOT NULL,
	student_last_name varchar(30) NOT NULL,
	student_pin integer(6) NOT NULL
) Engine = INNODB;

Create Table subject_info
(
	id integer(3) zerofill not null auto_increment PRIMARY KEY,
	student_id VARCHAR(10) NOT NULL,
	subject_name varchar(50) NOT NULL,
	subject_desc varchar(255),
	
	foreign key (student_id) references student_info(student_id)
) Engine = INNODB;

Create Table subject_grade_info
(
	id integer(3) zerofill not null auto_increment PRIMARY KEY,
	student_id VARCHAR(10) NOT NULL,
	subject_name varchar(50) NOT NULL,	
	grade_type varchar(255) NOT NULL,	
	grade_weight decimal(5,2) NOT NULL,
	curr_grade decimal(5,2),	
	
	foreign key (student_id) references student_info(student_id)
) Engine = INNODB;

create table subject_timetable_info
(
	id integer(3) zerofill not null auto_increment PRIMARY KEY,
	student_id VARCHAR(10) NOT NULL,
	subject_name varchar(50) NOT NULL,
	subject_room varchar(10) NOT NULL,	
	subject_day ENUM ('Monday','Tuesday','Wednesday','Thursday','Friday'),
	subject_period ENUM ('9:00', '10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00'),
	
	foreign key (student_id) references student_info(student_id)	
) Engine = INNODB;


#student_info population
describe student_info;
insert into student_info(student_id, student_first_name, student_last_name, student_pin) values 
("G00303598", "Morgan", "Reilly", 999999),
("G00346889", "Cathal", "Butler", 888888);
select * from student_info;

#subject_info population
describe subject_info;
insert into subject_info (student_id, subject_name, subject_desc) values 
 ("G00303598", "DBMS", "Exam, MCQ, Attendance, Project"),
 ("G00303598", "Adv. Data Centric", "MCQ, Written, Project"),
 ("G00303598", "Mobile App Dev 2", "Project, Openbook coding"),
 ("G00303598", "Graph Theory", "Project, Exam"),
 ("G00303598", "Software Testing", "MCQ, Open Book Coding, Exam"),
 ("G00303598", "Professional Practice in IT", "Project"),
 
 ("G00346889", "DBMS", "Exam, MCQ, Attendance, Project"),
 ("G00346889", "Adv. Data Centric", "MCQ, Written, Project"),
 ("G00346889", "Mobile App Dev 2", "Project, Openbook coding"),
 ("G00346889", "Graph Theory", "Project, Exam"),
 ("G00346889", "Software Testing", "MCQ, Open Book Coding, Exam"),
 ("G00346889", "Professional Practice in IT", "Project");
 
select * from subject_info;

#Subject_Grade_Info Tests
describe subject_grade_info;
insert into subject_grade_info (student_id, subject_name, grade_type, grade_weight, curr_grade) values
 ("G00303598", "DBMS", "Exam", 50, 0),
 ("G00303598", "DBMS", "MCQ", 15, 0),
 ("G00303598", "DBMS", "Attendance", 10, 0),
 ("G00303598", "DBMS", "Project", 15, 0),
 ("G00303598", "Adv. Data Centric", "MCQ", 25, 0),
 ("G00303598", "Adv. Data Centric", "CA1 - Written Coding", 25, 0),
 ("G00303598", "Adv. Data Centric", "Project", 50, 0),
 ("G00303598", "Mobile App Dev 2", "Project", 60, 0),
 ("G00303598", "Mobile App Dev 2", "Open Book Coding", 40, 0),
 ("G00303598", "Graph Theory", "Project", 50, 0),
 ("G00303598", "Graph Theory", "Exam", 50, 0),
 ("G00303598", "Software Testing", "Selinium MCQ", 15, 0),
 ("G00303598", "Software Testing", "Open Book Testing Exam", 15, 0),
 ("G00303598", "Software Testing", "Exam", 70, 0),
("G00303598", "Professional Practice in IT", "Project", 100, 0), 
 
 ("G00346889", "DBMS", "Exam", 50, 0),
 ("G00346889", "DBMS", "MCQ", 15, 0),
 ("G00346889", "DBMS", "Attendance", 10, 0),
 ("G00346889", "DBMS", "Project", 15, 0),
 ("G00346889", "Adv. Data Centric", "MCQ", 25, 0),
 ("G00346889", "Adv. Data Centric", "CA1 - Written Coding", 25, 0),
 ("G00346889", "Adv. Data Centric", "Project", 50, 0),
 ("G00346889", "Mobile App Dev 2", "Project", 60, 0),
 ("G00346889", "Mobile App Dev 2", "Open Book Coding", 40, 0),
 ("G00346889", "Graph Theory", "Project", 50, 0),
 ("G00346889", "Graph Theory", "Exam", 50, 0),
 ("G00346889", "Software Testing", "Selinium MCQ", 15, 0),
 ("G00346889", "Software Testing", "Open Book Testing Exam", 15, 0),
 ("G00346889", "Software Testing", "Exam", 70, 0),
("G00346889", "Professional Practice in IT", "Project", 100, 0);
select * from subject_grade_info;

#Constraint test
#insert into subject_grade_info (student_id, subject_name, grade_type, grade_weight, curr_grade) values ("G00303598", "DATA CENTRIC", "PROJECT", 101, 10);

#subject_timetable_info tests
describe subject_timetable_info;

insert into subject_timetable_info (student_id, subject_name, subject_room, subject_day, subject_period) values 
 ("G00303598", "DBMS", "994", 'Monday', '10:00'),
 ("G00346889", "DBMS", "994", 'Monday', '10:00'),
 ("G00303598", "Mobile App Dev 2", "995", 'Monday', '12:00'),
 ("G00346889", "Mobile App Dev 2", "995", 'Monday', '12:00'),
 ("G00346889", "Graph Theory", "BYOD", 'Monday', '15:00'),#A
 ("G00303598", "Adv. Data Centric", "CR5", 'Monday', '10:00'),#C
 
 ("G00346889", "DBMS", "CR1", 'Tuesday', '9:00'),#A
 ("G00303598", "Software Testing", "CR8", 'Tuesday', '9:00'),#C
 ("G00346889", "Mobile App Dev 2", "BYOD", 'Tuesday', '11:00'),#A
 ("G00303598", "Software Testing", "347", 'Tuesday', '13:00'),
 ("G00346889", "Software Testing", "347", 'Tuesday', '13:00'),
 ("G00303598", "Graph Theory", "BYOD", 'Tuesday', '15:00'),#C
 ("G00346889", "Software Testing", "BYOD", 'Tuesday', '16:00'),#A
 
 ("G00303598", "Professional Practice in IT", "994", 'Wednesday', '12:00'),
 ("G00346889", "Professional Practice in IT", "994", 'Wednesday', '12:00'), 
 ("G00303598", "Professional Practice in IT", "995", 'Wednesday', '13:00'),
 ("G00346889", "Professional Practice in IT", "995", 'Wednesday', '13:00'),
 ("G00303598", "Graph Theory", "995", 'Wednesday', '15:00'),
 ("G00346889", "Graph theory", "995", 'Wednesday', '15:00'),
 
 ("G00303598", "Mobile App Dev 2", "BYOB", 'Thursday', '9:00'),#C
 ("G00303598", "DBMS", "347", 'Thursday', '13:00'),
 ("G00346889", "DBMS", "347", 'Thursday', '13:00'),
 ("G00346889", "Adv. Data Centric", "CR5", 'Thursday', '14:00'),#A
 ("G00303598", "DBMS", "CR2", 'Thursday', '14:00'),#C
 ("G00303598", "Adv. Data Centric", "941", 'Thursday', '16:00'),
 ("G00346889", "Adv. Data Centric", "941", 'Thursday', '16:00'),
 
 ("G00303598", "Graph Theory", "Video", 'Friday', '11:00'),
 ("G00346889", "Graph Theory", "Video", 'Friday', '11:00');


select * from subject_timetable_info;

# Some of these tests are outdated, please be aware of this.
#inner join tests
#Case: 1 > Show student id, first name, subject name, grade type, grade weight where id = G00346889
select sgi.student_id, si.student_first_name, sgi.subject_name, sgi.grade_type, sgi.grade_weight from subject_grade_info sgi inner join student_info si on sgi.student_id = si.student_id where si.student_id = "G00346889";

#Case: 2 > id = G00346889, lastname, subject name, room, time, day, sort by time ascending
select si.student_id as ID, si.student_last_name as SIRNAME, sti.subject_name as SUBJECT, sti.subject_room as ROOM, sti.subject_start as TIME, subject_day as DAY from student_info si inner join subject_timetable_info sti on si.student_id = sti.student_id where si.student_id = "G00346889" ORDER BY sti.subject_start asc;

#Case: 3 > id=G00303598, lastname, firstname, subjectname, description, day (ascending), time (ascending)
select si.student_id, si.student_last_name, si.student_first_name, subji.subject_name, subji.subject_desc, sti.subject_room, sti.subject_start, sti.subject_day from student_info si inner join subject_info subji on si.student_id = subji.student_id inner join subject_timetable_info sti on si.student_id = sti.student_id where si.student_id = "G00303598" ORDER BY sti.subject_start asc, sti.subject_day asc;

#student_info insert, update, delete test
insert into student_info (student_id, student_first_name, student_last_name, student_pin) values ("G00123456", "Test", "Test", 22);
update student_info set student_id = "G00999999" where student_id = "G00123456";
delete from student_info where student_id = "G00999999";

#insert into student_info, create new subject info, modify student_id in subject_info table
insert into subject_info (student_id, subject_name, subject_desc) values ("G00123456", "TEST", "TEST");
update subject_info set student_id = "G00999999" where student_id = "G00123456"; #Fails! NICE!