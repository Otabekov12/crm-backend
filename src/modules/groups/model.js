const  PG  = require('../../utils/postgres')

class GroupsModel extends PG {
    
    // GET
    
    getGroups(){
        return this.fetch(`SELECT * FROM groups`)
    }
    
    // CREATE
    
    newGroups(group_name, user_id, course_id){
        return this.fetch(
            ` INSERT INTO groups(group_name, user_id, course_id)VALUES($1, $2, $3)RETURNING* `
            , group_name, user_id, course_id)
        }
            
            // DELETE 
            
            deleteGroups(id){
                return this.fetch(`DELETE FROM groups WHERE id = $1 RETURNING *`, id)
            }
            
            
            // SELECTS
            
            
            getGroupHomeworks(){
                return this.fetch(
                    `
                    SELECT
                    g.group_name, h.homework_discription
                    FROM 
                    groups as g
                    INNER JOIN homeworks as h
                    ON g.id = h.group_id
                    `
                    )
                }
              
            }
            
            module.exports = new GroupsModel()