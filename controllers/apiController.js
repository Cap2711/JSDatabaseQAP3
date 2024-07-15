const { getAllProducts, addProduct, updateProduct, deleteProduct } = require('../models/dal');

// Get all products for API
const getProducts = async (req, res) => {
    const products = await getAllProducts();
    res.json(products);
};

// Add a new product from API
const addNewProduct = async (req, res) => {
    const { name, price } = req.body;
    const newProduct = await addProduct(name, price);
    res.json(newProduct);
};

// Update a product from API
const updateExistingProduct = async (req, res) => {
    const { name, price } = req.body;
    const updatedProduct = await updateProduct(req.params.id, name, price);
    res.json(updatedProduct);
};

// Delete a product from API
const deleteExistingProduct = async (req, res) => {
    await deleteProduct(req.params.id);
    res.sendStatus(204);
};

module.exports = {
    getProducts,
    addNewProduct,
    updateExistingProduct,
    deleteExistingProduct,
};
