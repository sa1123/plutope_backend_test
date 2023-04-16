const express = require('express')

const customerCtrl = require('../controllers/customer-ctrl')

const router = express.Router()

router.post('/customer', customerCtrl.createCustomer)
router.put('/customer/:id', customerCtrl.updateCustomer)
router.delete('/customer/:id', customerCtrl.deleteCustomer)
router.get('/customer/:id', customerCtrl.getCustomerById)

module.exports = router