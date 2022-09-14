const  PG  = require('../../utils/postgres')

class CoursesModel extends PG {
    
    // GET
    
    getCourses(){
        return this.fetch(`SELECT * FROM courses`)
    }
    
    // CREATE
    
    newCourses(course_name, course_discription, course_price){
        return this.fetch(
            `
            INSERT INTO courses(
                course_name,
                course_discription,
                course_price
                )VALUES($1, $2, $3)RETURNING*`,
                course_name, course_discription, course_price)
            }
            
            // DELETE 
            
            deleteCourses(id){
                return this.fetch(`DELETE FROM courses WHERE id = $1 RETURNING *`, id)
            }
            
            // SELECTS
            
            
            getCoursesGroup(){
                return this.fetch(
                    `
                    SELECT
                    c.course_name, c.id as courseId, c.course_price, g.group_name
                    FROM 
                    courses as c
                    INNER JOIN groups as g
                    ON c.id = g.course_id;
                    `
                    )
                }
                
            
            
}
        
        
module.exports = new  CoursesModel()