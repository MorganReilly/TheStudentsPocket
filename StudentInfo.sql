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
	subject_desc varchar(150),
	
	foreign key (student_id) references student_info(student_id),
	UNIQUE (student_id, subject_name)
) Engine = INNODB;

Create Table subject_grade_info
(
	id integer(3) zerofill not null auto_increment PRIMARY KEY,
	student_id VARCHAR(10) NOT NULL,
	subject_name varchar(50) NOT NULL,	
	grade_type varchar(15) NOT NULL,
	
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
	subject_start DATETIME NOT NULL,
	subject_end DATETIME NOT NULL,	
	
	foreign key (student_id) references student_info(student_id)	
) Engine = INNODB;


#student_info Tests
describe student_info;
insert into student_info(student_id, student_first_name, student_last_name, student_pin) values 
("G00303598", "Morgan", "Reilly", 999999),
("G00346889", "Cathal", "Butler", 888888);
select * from student_info;

#subject_info Tests
describe subject_info;
insert into subject_info (student_id, subject_name, subject_desc) values 
 ("G00303598", "OOP", "Project + MCQ"),
 ("G00303598", "Data Centric", "Project + MCQ"),
 ("G00346889", "OOP", "Project work"),
 ("G00346889", "Data Centric", "Project work");
select * from subject_info;

#Subject_Grade_Info Tests
describe subject_grade_info;
insert into subject_grade_info (student_id, subject_name, grade_type, grade_weight, curr_grade) values
 ("G00303598", "OOP", "Project", 50, 0),
 ("G00303598", "OOP", "MCQ1", 25, 0),
 ("G00303598", "OOP", "MCQ2", 25, 0),
 ("G00346889", "OOP", "Project", 50, 0),
 ("G00346889", "OOP", "MCQ1", 25, 0),
 ("G00346889", "OOP", "MCQ2", 25, 0);
select * from subject_grade_info;

#Constraint test
insert into subject_grade_info (student_id, subject_name, grade_type, grade_weight, curr_grade) values ("G00303598", "DATA CENTRIC", "PROJECT", 101, 10);

#subject_timetable_info tests
describe subject_timetable_info;

insert into subject_timetable_info (student_id, subject_name, subject_room, subject_start,subject_end) values 
("G00303598", "OOP", "CR8", '2019-03-22 10:00:00', '2019-03-22 13:00:00'),
("G00303598", "OOP", "970", '2019-03-23 12:30:00', '2019-03-22 14:00:00'),
("G00346889", "OOP", "CR8", '2019-03-24 10:10:00', '2019-03-22 11:00:00'),
("G00346889", "OOP", "970", '2019-03-25 10:00:00', '2019-03-22 14:00:00');

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