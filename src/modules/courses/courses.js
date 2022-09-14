const model = require('./model')

class CoursesController {
    
    // GET
    
    async getCourses(req, res){
        res.json(await model.getCourses())
    }
    
    // CREATE
    
    async newCourses(req, res){
        const { course_name, course_discription, course_price} = req.body
        res.json(await model.newCourses(course_name, course_discription, course_price))
    }
    
    // DELETE
    
    
    async deleteCourses(_, res){
        const { id } = res.params
        res.json(await model.deleteCourses(id))
    }
    
    //    SELECTS
    
    async getCoursesGroup(req, res){
        res.json(await model.getCoursesGroup())
    }
    
    
}

module.exports = new CoursesController()