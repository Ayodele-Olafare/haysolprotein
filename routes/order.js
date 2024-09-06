const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Product = require('../models/Product');

// Submit order and update stock
router.post('/', async (req, res) => {
  const { name, address, productId, quantity } = req.body;
  const product = await Product.findById(productId);

  if (!product || product.stock < quantity) {
    return res.status(400).send('Insufficient stock');
  }

  const order = new Order({
    customerName: name,
    address,
    product: product.name,
    quantity
  });

  await order.save();
  
  // Update stock
  product.stock -= quantity;
  await product.save();

  res.redirect(`/track/${order._id}`);
});

// Track order
router.get('/track/:id', async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) return res.status(404).send('Order not found');

  res.render('track', { order });
});

module.exports = router;
