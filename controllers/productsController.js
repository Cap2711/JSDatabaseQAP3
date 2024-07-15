const { getAllProducts, addProduct, updateProduct, deleteProduct } = require('../models/dal');

// Display products
const displayProducts = async (req, res) => {
    const products = await getAllProducts();
    res.render('index', { products });
};

// Display form to add product
const addProductForm = (req, res) => {
    res.render('addProduct');
};

// Add a new product
const addNewProduct = async (req, res) => {
    const { name, price } = req.body;
    await addProduct(name, price);
    res.redirect('/');
};

// Edit product form
const editProductForm = async (req, res) => {
   
};

// Update a product
const updateExistingProduct = async (req, res) => {
    const { name, price } = req.body;
    await updateProduct(req.params.id, name, price);
    res.redirect('/');
};

// Delete a product
const deleteExistingProduct = async (req, res) => {
    await deleteProduct(req.params.id);
    res.redirect('/');
};

module.exports = {
    displayProducts,
    addProductForm,
    addNewProduct,
    editProductForm,
    updateExistingProduct,
    deleteExistingProduct,
};
