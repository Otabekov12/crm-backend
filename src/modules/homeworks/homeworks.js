const model = require('./model')

class HomeWorkController {
    async newHomeWork(req, res){
        const {  homework_discription } = req.body
        const { id } = req.params
        let homework = await model.newHomeWork(homework_discription, id)
        
        
        if(homework.length == 0) {
            res.json({ 
                status: 400,
                message: 'Afsuski'
            })
        }
        
        res.status(201).json({
            status: 201,
            message: 'Muvaffaqiyatli',
            data: homework
        })
        
    }
    
}


module.exports = new HomeWorkController()