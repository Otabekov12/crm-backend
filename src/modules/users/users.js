const jwt = require('../../utils/jwt')
const model = require('./model')

class UsersController {
    
    // Login
    
    async UserLogin(req,res){
        try{
            const { name, password }  = req.body
            
            const user = await model.UserLogin(name, password)
            
            if(user.length == 0){
                return res.sendStatus(401)
            }
            
            res.json({
                message: "Siz muvaffaqiyatli ro`yhatdan o`tingiz",
                access_token: jwt({id: user.id}),
                role: user[0].role
            })
        }   catch(err){
            console.log(err.massage)
        }
        

        
    }

// GET

async getUsers(_, res){
    res.json(await model.getUsers())
}

async getAdmins(_, res){
    res.json(await model.getAdmins())
}

async getTeachers(req, res){
    res.json(await model.getTeachers())
}

async getStudents(req, res){
    res.json(await model.getStudents())
}

// CREATE

async newUser(req, res){
    const { name, surname,  user_phone, password, course, role} = req.body
    res.json(await model.newUser(name, surname,  user_phone, password, course, role))
}

// DELETE

async deleteUsers(req, res){
    const { id } = req.params
    res.json(await model.deleteUsers(id))
}

// SELECTS

async getTeachersGroup(req, res){
    res.json(await model.getTeachersGroup())
}

async getStudentsGroup(req, res){
    res.json(await model.getStudentsGroup())
}

}

module.exports = new UsersController()