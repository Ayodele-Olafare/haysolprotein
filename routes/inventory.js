const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// View and manage inventory
router.get('/', async (req, res) => {
  const products = await Product.find({});
  res.render('inventory', { products });
});

router.post('/update', async (req, res) => {
  const { productId, newStock } = req.body;
  const product = await Product.findById(productId);

  if (product) {
    product.stock = newStock;
    await product.save();
  }

  res.redirect('/inventory');
});

module.exports = router;
