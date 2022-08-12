const Product = require('../models/product');

module.exports.products = (req, res) => {
  Product.find({}, (err, products) => {
    if (err) {
      return console.log(err);
    }
    return res.send(products)
  })
}

module.exports.create = (req, res) => {
  Product.create(req.body)
  .then(product => {
    console.log(product)
    return res.redirect('/product');
  })
  .catch(err => {
    return console.log(err);
  })
}

module.exports.search = (req, res) => {
  Product.find({ 
    "title": {
      "$regex": req.params.title,
      "$options": "i"
    }
  })
  .then(product => {
    return res.send(product);
  })
}