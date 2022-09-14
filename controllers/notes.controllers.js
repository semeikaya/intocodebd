const Note = require('../models/Note.model.js')

module.exports.noteController = {
    addNote: async (req, res) => {
        const { text, student } = req.body
        try {
            await Note.create({
                text,
                student
            })
            res.json('Заметка добавлена')
        } catch (error) {
            res.json(error.message)
        }
    },

    getNotes: async (req, res) => {
        try {
            const Notes = await Note.find().populate('student')
            res.json(Notes)
        } catch (error) {
            res.json(error.message)
        }
    },
    deleteNote: async (req, res) => {
        try {
            await Note.findByIdAndRemove(req.params.id)
            res.json('Заметка удалена')
        } catch (error) {
            res.json(error.message)
        }
    },
    updateNote: async (req, res) => {
        try {
            const { text, student } = req.body
            await Note.findByIdAndUpdate(req.params.id, {
                text, student
            } )
            res.json('Заметка обновлена')
        } catch (error) {
            res.json(error.message)
        }
    },

    getNotesByStudentId: async (req, res) => {
        try {
            const Notes = await Note.find({ student: req.params.id }).populate('student')
            res.json(Notes)
        } catch (error) {
            res.json(error.message)
        }
    },
}
