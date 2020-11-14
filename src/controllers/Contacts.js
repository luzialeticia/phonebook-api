const { contactsCollection } = require('../models/contactSchema')
const model = require('../models/contactSchema')

const getAll = (req, res) => {
  contactsCollection.find((error, contacts) => {
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
  contactsCollection.findById(id, (error, contact) => {
    if(error) {
      return res.status(500).send(error)
    } else if(contact) {
      return res.status(200).send(contact)
    } else {
      return res.status(404).send('Contact not found.')
    }
  })
}

const getByName = (req, res) => {
  const name = req.params.name
  const capitalizeName = name.charAt(0).toUpperCase() + name.slice(1)
  contactsCollection.find({ name: capitalizeName }, (error, contact) => {
    if(error) {
      return res.status(500).send(error)
    } else if(contact == "") {
      return res.status(404).send('Contact not found.')
    } else {
      return res.status(200).send(contact)
    }
  })
}

const addContact = (req, res) => {
  const contactBody = req.body
  const contact = new contactsCollection(contactBody)

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

const updateContact = (req, res) => {
  const id = req.params.id
  const contactBody = req.body
  const updatedContact = { new: true }

  contactsCollection.findByIdAndUpdate(id, contactBody, updatedContact,
    (error, contact) => {
      if(error) {
        return res.status(500).send(error)
      } else if(contact) {
        return res.status(200).send(contact)
      } else {
        return res.status(404).send('Contact not found.')
      }
    }
  )
}

const deleteContact = (req, res) => {
  const id = req.params.id
  contactsCollection.findByIdAndDelete(id, (error) => {
    if(error) {
      return res.status(404).send('Contact not found.')
    } else {
      return res.status(200).send('Contact deleted!')
    }
  })
}

module.exports = {
  getAll,
  getById,
  getByName,
  addContact,
  updateContact,
  deleteContact
}