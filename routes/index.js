const express = require('express');
const router = express.Router();
const product = require('../controllers/product');


router.get('/products',product.getProduct);
router.get('/product/detail/:id',product.productDetail);
router.put('/product/update/:id',product.updateProduct);
router.post('/product/create',product.createProduct);
router.delete('/product/delete/:id',product.deleteProduct);

module.exports = router;


