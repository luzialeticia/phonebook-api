const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contactSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  cellPhone: {
    type: String,
    required: true
  },
  birthDate: {
    type: Date,
    required: true
  },
  profilePhoto: {
    type: String,
    required: false
  }
})

const contactsCollection = mongoose.model('contacts', contactSchema)

module.exports = contactsCollection