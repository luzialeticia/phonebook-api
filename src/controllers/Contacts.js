const model = require('../models/contactSchema')

const getAll = (req, res) => {
  model.contactsCollection.find((error, contacts) => {
    if(error) {
      return res.status(500).send(error)
    } else {
      return res.status(200).send({
        message: "Sucesso!",
        contacts
      })
    }
  })
}

const getById = (req, res) => {
  const id = req.params.id
  model.contactsCollection.findById(id, (error, contact) => {
    if(error) {
      return res.status(404).send('Contact not found.')
    } else {
      return res.status(200).send(contact)
    }
  })
}

const addContact = (req, res) => {
  const contactBody = req.body
  const contact = new model.contactsCollection(contactBody) //model.contactsCollection(contactBody)

  contact.save((error) => {
    if(error) {
      return res.status(400).send(error)
    } else {
      return res.status(202).send({
        message: "Contato cadastrado com sucesso!",
        contact
      })
    }
  })
}

module.exports = {
  getAll,
  getById,
  addContact
}