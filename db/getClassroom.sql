select students.first_name, students.last_name, students.gender from students
inner join teachers on teachers.classroom = students.classroom_id
where teachers.classroom = $1