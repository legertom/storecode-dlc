const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Shopping Cart Page
router.get('/cart', cartController.viewCart);

// Add item to cart
router.post('/cart/add', cartController.addItem);

// Update item quantity in cart
router.put('/cart/update/:itemId', cartController.updateItem);

// Remove item from cart
router.delete('/cart/remove/:itemId', cartController.removeItem);

// module.exports = router;



// Add your routes here

export { router as cartRoutes };