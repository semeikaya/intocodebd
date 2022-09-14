const { Router } = require('express')
const router = Router()
const { groupController } = require('../controllers/groups.controller')

router.post('/admin', groupController.addGroup)
router.get('/admin', groupController.getGroups)
router.delete('/admin/:id', groupController.deleteGroup)
router.patch('/admin/:id', groupController.updateGroup)
router.get('/admin/:id', groupController.getGroupById)
router.get('/week', groupController.getGroupByWeek)
router.get('/endstudy/', groupController.getEndGroups)




module.exports = router