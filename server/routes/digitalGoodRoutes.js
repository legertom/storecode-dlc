const express = require('express');
const router = express.Router();
const digitalGoodRoutes = require('./digitalGoodRoutes');
const otherController = require('../controllers/otherController');

// Use digital good routes
router.use('/digital-goods', digitalGoodRoutes);

// Home Page
router.get('/', otherController.home);

// Shopping Cart Page
router.get('/cart', otherController.cart);

// Checkout Page
router.get('/checkout', otherController.checkout);

// Order Confirmation Page
router.get('/order-confirmation/:transactionId', otherController.orderConfirmation);

// module.exports = router;

export { router as digitalGoodRoutes };