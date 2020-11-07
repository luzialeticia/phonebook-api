const model = require('../models/contactSchema')

const getAll = (req, res) => {
  model.find((error, contacts) => {
    if(error) {
      return res.status(500).send(error)
    } else {
      return res.status(200).send({
        mensagem: "Contacts",
        contacts
      })
    }
  })
}



module.exports = {
  getAll
}