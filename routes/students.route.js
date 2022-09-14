const { Router } = require('express')
const router = Router()
const { studentController } = require('../controllers/students.controller')

router.post('/admin', studentController.addStudent)
// router.delete('/admin/:id', studentController.deleteDrug)
// router.patch('/admin/:id', studentController.updateDrug)
// router.get('/admin', studentController.getDrugs)
// router.get('/user', studentController.getDrugs)
// router.get('/user/category/:id', studentController.getDrugsByCategoryId)
// router.get('/user/:id', studentController.getDrugById)

module.exports = router