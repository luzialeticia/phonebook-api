const express = require('express')
const router = express.Router()
const controller = require('../controllers/Contacts')

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/add', controller.addContact)

module.exports = router