const express = require('express')
const router = express.Router()
const controller = require('../controllers/Contacts')

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.get('/name/:name', controller.getByName)
router.post('/add', controller.addContact)
router.put('/update/:id', controller.updateContact)
router.delete('/delete/:id', controller.deleteContact)

module.exports = router