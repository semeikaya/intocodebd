const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name: { type: String, required: true },
    group: { type: mongoose.SchemaTypes.ObjectId, required: true, default: null, ref: 'Group' }, //группа в которой учится
    status: { type: String, required: true, trim: true },//учится //ищет работу //получил оффер //вышел на работу
    payment: { type: String, required: true, trim: true } //совершил ли оплату
})

const Student = mongoose.model('Student', studentSchema)
module.exports = Student