const model = require('./model')


class GroupsController {

    // GET

    async getGroups(req, res){
        res.json(await model.getGroups())
    }


    // CREATE
    

    async newGroups(req, res){
        const { group_name, user_id, course_id} = req.body
        res.json(await model.newGroups(group_name, user_id, course_id))
    }


    // DELETE

    async deleteGroups(req, res){
        const { id } = req.params
        res.json(await model.deleteGroups(id))
    }

    // SELECTS
    
    async getGroupHomeworks(req, res){
        res.json(await model.getGroupHomeworks())
    }

}

module.exports = new  GroupsController()