Drop DATABASE if exists student_grade_info;
Create DATABASE student_grade_info default CHARACTER Set = utf8 default COLLATE = utf8_general_ci;
use student_grade_info;

Create Table Student_Info
(
	student_id INTEGER(10) not null,
	first_name varchar(30),
	last_name varchar(30),
	primary key (student_id)
) Engine = INNODB;

Create Table Subject_Grade_Info
(
	student_id INTEGER(10) unique not null,
	subject_name varchar(50) not null,
	grade_type varchar(20),
	grade_weight decimal(4,2),
	grade_current_mark decimal(4,2),
	primary key (subject_name),
	foreign key (student_id) references Student_Info(student_id) on delete restrict on update restrict
) Engine = INNODB;

create table Timetable_Info
(
	student_id INTEGER(10) unique not null,
	subject_name varchar(50) not null,
	subject_location varchar(10),
	subject_start_time TIME,
	subject_end_time TIME,
	subject_day varchar(10),
	primary key (subject_day),
	foreign key (student_id) references Student_Info(student_id) on delete restrict on update restrict,
	foreign key (subject_name) references Subject_Grade_Info(subject_name) on delete restrict on update restrict
	
) Engine = INNODB;

