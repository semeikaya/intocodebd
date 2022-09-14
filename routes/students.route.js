const { Router } = require('express')
const router = Router()
const { studentController } = require('../controllers/students.controller')

router.post('/admin', studentController.addStudent)
router.patch('/admin/:studentid/:groupid', studentController.addStudentGroup)
router.patch('/admin/:id', studentController.updateStudent)
router.delete('/admin/:id', studentController.deleteStudent)

router.get('/group/:id', studentController.getStudentsByGroupId)
router.get('/admin', studentController.getStudents)
router.get('/', studentController.getStudents)
router.get('/admin/fullpay', studentController.getStudentsFullPay)
router.get('/admin/didntpay', studentController.getStudentsDidntPay)
router.get('/admin/halfpay', studentController.getStudentsHalfPay)
router.get('/admin/study', studentController.getStudentsStudy)
router.get('/admin/searchjob', studentController.getStudentsSearchJob)
router.get('/admin/gotanoffer', studentController.getStudentsGotAnOffer)
router.get('/admin/wenttowork', studentController.getStudentsWentToWork)
router.get('/admin/gotanoffer/:groupid', studentController.getGotAnOffer)
// router.patch('/admin/:id', studentController.updateDrug)


// router.get('/user/:id', studentController.getDrugById)

module.exports = router