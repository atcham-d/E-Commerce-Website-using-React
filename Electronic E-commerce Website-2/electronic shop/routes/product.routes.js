// backend/routes/product.routes.js
const router = require('express').Router();
let Product = require('../models/product.model');

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(400).json('Error: ' + error);
  }
});

module.exports = router;