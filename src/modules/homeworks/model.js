const PG = require('../../utils/postgres')

class HomeWorkModel extends PG{
newHomeWork(homework_discription, group_id){
    return this.fetch(`
        INSERT INTO 
        homeworks(homework_discription, group_id) 
        VALUES
        ($1, $2, $3)
        RETURNING *
    
    `, homework_discription, group_id)
    }

}

module.exports = new HomeWorkModel()