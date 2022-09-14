const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name: { type: String, required: true },
    group: { type: mongoose.SchemaTypes.ObjectId, required: true, default: null }, //группа в которой учится
    study: { type: Boolean, required: true }, //учится
    searchJob: { type: Boolean, required: true }, //ищет работу
    wentToWork: { type: Boolean, required: true }, //вышел на работу
    gotAnOffer: {type: Boolean, required: true}, //получил оффер
    prepay: { type: Boolean, required: true }, //предоплата
    payment: { type: Boolean, required: true } //совершил ли оплату
})

const Student = mongoose.model('Student', studentSchema)
module.exports = Student