const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// View all orders
router.get('/', async (req, res) => {
  const orders = await Order.find({});
  res.render('admin', { orders });
});

// Update order status
router.post('/update/:id', async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.status = req.body.status;
    await order.save();
  }
  res.redirect('/admin');
});

module.exports = router;
