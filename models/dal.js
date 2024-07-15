const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Qap3',
    password: 'Keyin2021',
    port: 5432,
});

// Get all products
const getAllProducts = async () => {
    const res = await pool.query('SELECT *, price::numeric AS price FROM products');
    return res.rows.map(row => ({
        ...row,
        price: parseFloat(row.price)
    }));
};


// Get a product by ID
const getProductById = async (id) => {
    const res = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
    return res.rows[0];
};

// Add a new product
const addProduct = async (name, price) => {
    const res = await pool.query('INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *', [name, price]);
    return res.rows[0];
};

// Update a product
const updateProduct = async (id, name, price) => {
    const res = await pool.query('UPDATE products SET name = $1, price = $2 WHERE id = $3 RETURNING *', [name, price, id]);
    return res.rows[0];
};

// Delete a product
const deleteProduct = async (id) => {
    await pool.query('DELETE FROM products WHERE id = $1', [id]);
};

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct,
};
