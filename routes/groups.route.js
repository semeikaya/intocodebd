const { Router } = require('express')
const router = Router()
const { groupController } = require('../controllers/groups.controller')

router.post('/admin', groupController.addGroup)
// router.delete('/admin/:id', categoryController.deleteCategory)
// router.patch('/admin/:id', categoryController.updateCategory)
// router.get('/admin', categoryController.getCategories)
// router.get('/admin/:id', categoryController.getCategoryById)
// router.get('/user', categoryController.getCategories)
// router.get('/user/:id', categoryController.getCategoryById)

module.exports = router