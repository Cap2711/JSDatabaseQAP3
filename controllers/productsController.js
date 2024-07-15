const { getAllProducts, addProduct, updateProduct, deleteProduct, getProductById } = require('../models/dal');

const displayProducts = async (req, res) => {
    try {
        const products = await getAllProducts(); 
        console.log(products); 
        res.render('index', { products });
    } catch (error) {
        console.error(error); 
        res.status(500).send('Server Error');
    }
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
    try {
        const product = await getProductById(req.params.id);
        if (!product) {
            return res.status(404).send('Product Not Found');
        }
        res.render('editProduct', { product });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
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
