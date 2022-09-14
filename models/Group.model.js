const mongoose = require('mongoose')

const groupSchema = mongoose.Schema({
    name: { type: String, required: true },
    students: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Student'}],
    week: {type: Number, required: true}
})

const Group = mongoose.model('Group', groupSchema)
module.exports = Group