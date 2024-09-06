const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  product: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 1
  },
  status: {
    type: String,
    default: 'Pending' // "Pending", "Delivered"
  },
  orderDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', OrderSchema);
