const Router = require('express')
const userController = require('../controller/user.controller')
const router = new Router

router.post('/create_person', userController.createPerson)
router.post('/starship', userController.createStarship)
router.get('/person/all', userController.getAllPerson)
router.get('/starship/all', userController.getAllStarship)
router.get('/person/:id', userController.getPerson)
router.get('/starship/:id', userController.getAllStarship)
router.get('/labtask', userController.getLabTask)
router.put('/update_person/', userController.updatePerson)
router.put('/starship', userController.updateStarship)
router.get('/persondel/:id', userController.deletePerson)
router.delete('/starship', userController.deleteStarship)
module.exports = router