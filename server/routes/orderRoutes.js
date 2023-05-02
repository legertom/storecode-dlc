const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Checkout Page
router.get('/checkout', orderController.checkoutPage);

// Process Checkout and Create Order
router.post('/checkout', orderController.processCheckout);

// Order Confirmation Page
router.get('/order-confirmation/:transactionId', orderController.orderConfirmation);

// User Order History Page
router.get('/account/orders', orderController.orderHistory);

module.exports = router;
