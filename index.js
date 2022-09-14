const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
app.use(express.json())

app.use('/students', require('./routes/students.route'))
app.use('/notes', require('./routes/notes.routes'))
app.use('/groups', require('./routes/groups.route'))

mongoose.connect(process.env.MONGO_SERVER, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Успешно соединились с сервером MongoDB')
    
    app.listen(3000, () => {
        console.log('Сервер успешно запущен');
    });
})