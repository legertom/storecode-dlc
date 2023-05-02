const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  digitalGoods: [
    {
      digitalGood: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DigitalGood',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  transactionId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
