const db = require('../db')
class UserController {
    async getAllPerson(req, res){
        const persons = await db.query('SELECT * FROM persons')
        res.json(persons.rows)
    }
    async getAllStarship(req, res){
        const starships = await db.query('SELECT * FROM starships')
        res.json(starships.rows)
    }
    async getPerson(req, res){
        const id = req.params.id
        const persons = await db.query('SELECT * FROM persons where id = $1', [id])
        res.json(persons.rows[0])
    }
    async getStarship(req, res){
        const id = req.params.id
        const starships = await db.query('SELECT * FROM starships where id = $1', [id])
        res.json(starships.rows[0])
    }
    async createStarship(req, res){
        const {ID, NAME, MANUFACTURER, CARGO_CAPACITY, PILOTS_ID} = req.body
        const newStarship = await db.query('INSERT INTO starships (ID, NAME, MANUFACTURER, CARGO_CAPACITY, PILOTS_ID) values ($1, $2, $3, $4, $5) RETURNING *',
        [ID, NAME, MANUFACTURER, CARGO_CAPACITY, PILOTS_ID])
        res.json(newStarship.rows[0])
    }
    async createPerson(req, res){
        const {ID, NAME, GENDER, HOMEWORLD, SHIPS_ID} = req.body
        const newPerson = await db.query('INSERT INTO persons (ID, NAME, GENDER, HOMEWORLD, SHIPS_ID) values ($1, $2, $3, $4, $5) RETURNING *',
        [ID, NAME, GENDER, HOMEWORLD, SHIPS_ID])
        res.json(newPerson.rows[0])
    }
    async updatePerson(req, res){
        const {ID, NAME, GENDER, HOMEWORLD, SHIPS_ID} = req.body
        const person = await db.query('UPDATE persons set NAME = $1, GENDER = $2, HOMEWORLD = $3, SHIPS_ID = $4 where ID = $5 RETURNING *',[NAME, GENDER, HOMEWORLD, SHIPS_ID, ID] )
        res.json(person.rows[0])
    }
    async updateStarship(req, res){
        const {ID, NAME, MANUFACTURER, CARGO_CAPACITY, PILOTS_ID} = req.body
        const starship = await db.query('UPDATE starships set NAME = $1, MANUFACTURER = $2, CARGO_CAPACITY = $3, PILOTS_ID = $4 where ID = $5 RETURNING *',[NAME, MANUFACTURER, CARGO_CAPACITY, PILOTS_ID, ID] )
        res.json(starship.rows[0])
    }
    async deletePerson(req, res){
        const id = req.params.id
        const person = await db.query('DELETE FROM persons where id = $1', [id])
        res.json(person.rows[0])
    }
    async deleteStarship(req, res){
        const id = req.params.id
        const starship = await db.query('DELETE FROM starships where id = $1', [id])
        res.json(starship.rows[0])
    }
    ////ПОДУМАТЬ НАД ЭТИМ ЕЩЁ
    async getLabTask(req, res){
        const labResult = await db.query('CREATE TABLE new_table AS SELECT * from starships order by cargo_capacity desc limit 10; select name ,gender ,homeworld from persons WHERE id in (SELECT unnest(pilots_id) from new_table);drop table new_table;')
    }
}

module.exports = new UserController()