update students
set email = $1
where id = $2

select * from students