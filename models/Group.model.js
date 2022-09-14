const mongoose = require('mongoose')

const groupSchema = mongoose.Schema({
    name: { type: String, required: true },
    students: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Student'}],
    week: {type: Number, default: 0},
    endStudy: {type: Boolean, default: false}
})

const Group = mongoose.model('Group', groupSchema)
module.exports = Group