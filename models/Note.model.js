const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
    text: { type: String, required: true },
    student: {type: mongoose.SchemaTypes.ObjectId, required: true, ref: 'Student'},
})

const Note = mongoose.model('Note', noteSchema)
module.exports = Note