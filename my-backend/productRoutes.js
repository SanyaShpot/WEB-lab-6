const express = require('express');
const router = express.Router();
const productController = require('./productController');

router.get('/', productController.getFilteredProducts);

router.get('/:id', productController.getProductById);

router.post('/', productController.createProduct);

module.exports = router;
