const express = require('express')
const users = require('./users/users')
const courses = require('./courses/courses')
const groups = require('./groups/groups')
const homeworks = require('./homeworks/homeworks')

const router = express.Router()


router
    // LOGIN
    .post('/login', users.UserLogin)

    // USERS
    .get('/users', users.getUsers)
    .get('/admins', users.getAdmins)
    .get('/teachers', users.getTeachers)
    .get('/students', users.getStudents)
    .post('/users', users.newUser)
    .delete('/users/:id', users.deleteUsers)

    // Courses
    .get('/courses',courses.getCourses)
    .post('/courses', courses.newCourses)
    .delete('/courses/:id',courses.deleteCourses)


    // GROUPS
    .get('/groups',groups.getGroups)
    .get('/groups/homework', groups.getGroupHomeworks)
    .post('/groups', groups. newGroups)
    .delete('/groups/:id',groups.deleteGroups)

    // Homework
    .post('/homework', homeworks.newHomeWork)
    
    
    // SELECTS
    .get('/teachers/groups', users. getTeachersGroup)

module.exports = router