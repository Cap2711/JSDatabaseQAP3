const express = require('express');
const router = express.Router();
const { 
    getProducts,
    addNewProduct,
    updateExistingProduct,
    deleteExistingProduct 
} = require('../controllers/apiController');

// Get all products
router.get('/products', getProducts);

// Add a new product
router.post('/products', addNewProduct);

// Update a product
router.put('/products/:id', updateExistingProduct);

// Delete a product
router.delete('/products/:id', deleteExistingProduct);

module.exports = router;
