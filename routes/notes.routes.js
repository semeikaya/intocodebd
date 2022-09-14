const { Router } = require('express')
const router = Router()
const { noteController } = require('../controllers/notes.controllers')

router.post('/admin', noteController.addNote)
router.get('/student/:id', noteController.getNotesByStudentId)
router.get('/admin', noteController.getNotes)
// router.get('/', noteController.getStudents)
router.delete('/admin/:id', noteController.deleteNote)
router.patch('/admin/:id', noteController.updateNote)


// router.get('/user/:id', studentController.getDrugById)

module.exports = router