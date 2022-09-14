const Group = require('../models/Group.model')

module.exports.groupController = {
    addGroup: async (req, res) => {
        const { name, week, endStudy } = req.body
        try {
            await Group.create({
                name,
                week,
                endStudy
            })
            res.json('Группа добавлена')
        } catch (error) {
            res.json(error.message)
        }
    },

    deleteGroup: async (req, res) => {
        try {
            await Group.findByIdAndRemove(req.params.id)
            res.json('Группа удалена')
        } catch (error) {
            res.json(error.message)
        }
    },

    getGroups: async (req, res) => {
        try {
            const groups = await Group.find().populate('students')
            res.json(groups)
        } catch (error) {
            res.json(error.message)
        }
    },

    updateGroup: async (req, res) => {
        try {
            const { name, week, endStudy } = req.body
            await Group.findByIdAndUpdate(req.params.id, {
                name,
                week,
                endStudy
            })
            res.json('Изменения сохранены')
        } catch (error) {
            res.json(error.message)
        }
    },

    getGroupById: async (req, res) => {
        try {
            const Group = await Group.findById(req.params.id).populate('students')
            res.json(Group)
        } catch (error) {
            res.json(error.message)
        }
    },

    getGroupByWeek: async (req, res) => {
        try {
            const data = await Group.find({week: req.body.week}).populate('students')
            res.json(data)
        } catch (error) {
            res.json(error.message)
        }
    },

    getGroupByWeek: async (req, res) => {
        try {
            const data = await Group.find({week: req.body.week}).populate('students')
            res.json(data)
        } catch (error) {
            res.json(error.message)
        }
    },
    getEndGroups: async (req, res) => {
        try {
            const data = await Group.find({endStudy: true}).populate('students')
            res.json(data)
        } catch (error) {
            res.json(error.message)
        }
    },
}