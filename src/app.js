const express = require('express')
const app = express()
const cors = require('cors')
const index = require('./routes/index')
const contacts = require('./routes/Contacts')
//const db = require('./models/repository')

//db.connect()

app.use(cors())
app.use(express.json())
app.use('/', index)
app.use('/contacts', contacts)

module.exports = app