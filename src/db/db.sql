CREATE DATABASE crm;

-- users

CREATE TABLE users(
    id uuid NOT NULL DEFAULT  uuid_generate_v4()PRIMARY KEY,
    name varchar(255) NOT NULL,
    surname varchar(255) NOT NULL,
    user_phone bigint NOT NULL,
    password bigint NOT NULL,
    course varchar(255),
    role varchar(255) NOT NULL DEFAULT 'student'    
);

-- ALTER TABLE users
--   ADD role varchar(16)NOT NULL default 'student';


-- e35dbbe0-2102-44ca-8a65-8ab4f004e55e user

-- 11c0a86c-43b1-4540-9a4c-0a09252171f3 course

-- ALTER TABLE users DROP COLUMN role;

-- ALTER COLUMN role TYPE column_definition;

-- ALTER users  role    DROP  NOT NULL;
-- courses

CREATE TABLE courses (
    id uuid NOT NULL DEFAULT  uuid_generate_v4()PRIMARY KEY,
    course_name varchar(255) NOT NULL,
    course_discription varchar(255) NOT NULL,
    course_price numeric (10,2)NOT NULL
);

insert into users (name, surname,   user_phone, password, course, role) values ('Gani', 'Furqat',  40000, 226198, 'VUE', 'student');
insert into courses (course_name,   course_discription , course_price) values ('1c', 'wfwaearf',  700000);

-- groups

CREATE TABLE groups(
    id uuid NOT NULL DEFAULT  uuid_generate_v4()PRIMARY KEY,
    group_name varchar(255) NOT NULL,
    created_at timestamptz DEFAULT current_timestamp,
    user_id uuid,
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
    course_id uuid,
    FOREIGN KEY(course_id) REFERENCES courses(id) ON DELETE CASCADE
);


insert into groups (group_name, user_id,  course_id) values ('N21', '9ea9b7ec-8ba1-462f-8d51-e697e1fa60a1', '84758cc2-53ec-4e42-8103-937b90c8cd8d');
insert into groups (group_name, user_id,  course_id) values ('N22', '0b3a961f-4f12-4a20-9f7e-0a63cb2e512d', '06d60bf0-6231-4666-abe3-bc8197c5082f');
insert into groups (group_name, user_id,  course_id) values ('N24', 'd24fdd69-0478-48e3-b2a3-5891dd376955', '02be3144-da42-4e5a-8015-f706169464ef');


-- homeworks

CREATE TABLE homeworks(
    id uuid NOT NULL DEFAULT  uuid_generate_v4()PRIMARY KEY,
    homework_discription varchar(255) NOT NULL,
    created_at timestamptz DEFAULT current_timestamp,
    user_id uuid,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    group_id uuid,
    FOREIGN KEY (group_id) REFERENCES groups(id) ON DELETE CASCADE
);


insert into homeworks (homework_discription, user_id,   group_id) values ('jwnJLNljnlkawef', 'd24fdd69-0478-48e3-b2a3-5891dd376955', '05d8012c-e0a4-4c01-9b32-ec457f2abee9');
