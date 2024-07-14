const express = require('express');
const router = express.Router();
const { getAllProducts, addProduct, updateProduct, deleteProduct } = require('../controllers/apiController');

// get all products
router.get('/products', getAllProducts);

// add new
router.post('/products', addProduct);

// update
router.put('/products/:id', updateProduct);

//delete
router.delete('/products/:id', deleteProduct);

module.exports = router;
