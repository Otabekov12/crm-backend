const  PG  = require('../../utils/postgres')

class UsersModel extends PG {

    // Login

    UserLogin(name, password) {
        return this.fetch(`select * from users where name = $1 and password = $2`, name, password)
    }
    
    // GET
    
    getUsers(){
        return this.fetch(`SELECT * FROM users`)
    }
    
    getAdmins(){
        return this.fetch(`SELECT * FROM users WHERE role = 'admin'`)
    }
    
    getTeachers(){
        return this.fetch(`SELECT * FROM users WHERE role = 'teachers'`)
    }
    
    getStudents(){
        return this.fetch(`SELECT * FROM users WHERE role = 'students'`)
    }
    
    
    // CREATE
    
    newUser(name, surname, userphone, password, course, role){
        return this.fetch(
            `
            INSERT INTO users(
                name,
                surname, 
                user_phone,
                password,
                course,
                role
                )VALUES($1, $2, $3, $4, $5, $6) RETURNING*
                `, name, surname, userphone, password, course, role)
            }
            
            // DELETE 
            
            deleteUsers(id){
                return this.fetch(`DELETE FROM users WHERE id = $1 RETURNING *`, id)
            }
            
            
            // SELECTS
            
            getTeachersGroup(){
                return this.fetch(
                    `
                    SELECT
                    u.id, u.name, u.surname, g.id, g.group_name 
                    FROM 
                    users as u
                    INNER JOIN groups as g
                    ON u.id = g.user_id
                    WHERE u.role = 'teachers';
                    `
                    )
                }
                
                getStudentsGroup(){
                    return this.fetch(
                        `
                        SELECT
                        u.id, u.name, u.surname, g.id, g.group_name 
                        FROM 
                        users as u
                        INNER JOIN groups as g
                        ON u.id = g.user_id
                        WHERE u.role = 'student';
                        `
                        )
                    }
}
                
                
                
module.exports = new UsersModel()