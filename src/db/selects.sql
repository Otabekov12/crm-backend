SELECT
    c.course_name, c.id as courseId, c.course_price, g.group_name
FROM 
    courses as c
INNER JOIN groups as g
ON c.id = g.course_id;

SELECT
    g.group_name, h.homework_discription
FROM 
    groups as g
INNER JOIN homeworks as h
ON g.id = h.group_id;


SELECT
    u.id, u.name, u.surname, g.id, g.group_name 
FROM 
    users as u
INNER JOIN groups as g
ON u.id = g.user_id
WHERE u.role = 'student';

SELECT
    u.id, u.name, u.surname, g.id, g.group_name 
FROM 
    users as u
INNER JOIN groups as g
ON u.id = g.user_id
WHERE u.role = 'teachers';



