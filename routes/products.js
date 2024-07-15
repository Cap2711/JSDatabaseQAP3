const express = require('express');
const router = express.Router();
const { 
    displayProducts,
    addProductForm,
    addNewProduct,
    editProductForm,
    updateExistingProduct,
    deleteExistingProduct 
} = require('../controllers/productsController');

// Display products
router.get('/', displayProducts);

// Add product form
router.get('/add', addProductForm);
router.post('/add', addNewProduct);

// Edit product form
router.get('/edit/:id', editProductForm);
router.post('/edit/:id', updateExistingProduct); // Use POST for simplicity

// Delete a product
router.post('/delete/:id', deleteExistingProduct); // Use POST for simplicity

module.exports = router;
