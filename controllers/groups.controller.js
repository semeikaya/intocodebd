const Group = require('../models/Group.model')

module.exports.groupController = {
    addGroup: async (req, res) => {
        const { name, week } = req.body
        try {
            await Group.create({
                name,
                week
            })
            res.json('Группа добавлена')
        } catch (error) {
            res.json(error.message)
        }
    },

    deleteGroup: async (req, res) => {
        try {
            await Group.findByIdAndRemove(req.params.id)
            res.json('Категория удалена')
        } catch (error) {
            res.json(error.message)
        }
    },

    getCategories: async (req, res) => {
        try {
            const categories = await Group.find()
            res.json(categories)
        } catch (error) {
            res.json(error.message)
        }
    },

    updateGroup: async (req, res) => {
        try {
            await Group.findByIdAndUpdate(req.params.id, {
                name: req.body.name
            })
            res.json('Изменения сохранены')
        } catch (error) {
            res.json(error.message)
        }
    },

    getGroupById: async (req, res) => {
        try {
            const Group = await Group.findById(req.params.id)
            res.json(Group)
        } catch (error) {
            res.json(error.message)
        }
    },
}