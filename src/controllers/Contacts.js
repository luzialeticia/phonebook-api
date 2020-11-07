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

// const updateContact = (req, res) => {
//   const id = req.params.id
//   const contactBody = req.body
//   const updatedContact = {new: true}

//   model.contactsCollection.findByIdAndUpdate(
//     id,
//     {$set:{contactBody}},
//     updatedContact,
//     (error, contact) => {
//       if(error) {
//         return res.status(404).send('Contact not found.')
//       } else {
//         return res.status(200).send(contact)
//       }
//     }
//   )
// }

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
  addContact,
  //updateContact,
  deleteContact
}