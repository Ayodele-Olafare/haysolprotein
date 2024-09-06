const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  imageUrl: String,
  stock: { type: Number, required: true, default: 10 }
});

module.exports = mongoose.model('Product', ProductSchema);
