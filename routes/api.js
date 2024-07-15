// routes/api.js
const express = require('express');
const router = express.Router();
const { getAllProducts, addProduct, updateProduct, deleteProduct } = require('../dal'); // Import DAL functions

// Get all products
router.get('/products', async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

// Add a new product
router.post('/products', async (req, res) => {
  try {
    const newProduct = await addProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).send('Bad Request');
  }
});

// Update a product
router.put('/products/:id', async (req, res) => {
  try {
    const updatedProduct = await updateProduct(req.params.id, req.body);
    res.json(updatedProduct);
  } catch (error) {
    res.status(404).send('Product Not Found');
  }
});

// Delete a product
router.delete('/products/:id', async (req, res) => {
  try {
    await deleteProduct(req.params.id);
    res.status(204).send(); 
  } catch (error) {
    res.status(404).send('Product Not Found');
  }
});

module.exports = router;
