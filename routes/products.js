const express = require('express');
const router = express.Router();
const { getAllProducts, addProductForm, addProduct, editProductForm, updateProduct, deleteProduct } = require('../controllers/productsController');

//Display products
router.get('/', getAllProducts);

// add a oprduct
router.get('/add', addProductForm);


router.post('/add', addProduct);

//  display
router.get('/edit/:id', editProductForm);

// update
router.put('/edit/:id', updateProduct);

// delete
router.delete('/delete/:id', deleteProduct);

module.exports = router;
