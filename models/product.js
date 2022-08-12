const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  title: String,
  description: String,
  artist: String,
  imageurl: String,
  price: Number
}, {
  timestamps: true
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;