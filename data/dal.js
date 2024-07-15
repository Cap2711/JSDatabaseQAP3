const { Pool } = require('pg');


const pool = new Pool({
    user: 'your_username',
    host: 'localhost',
    database: 'your_database_name',
    password: 'your_password',
    port: 5432,
});

// get all products
const getAllProducts = async () => {
    const res = await pool.query('SELECT * FROM products');
    return res.rows;
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
    addProduct,
    updateProduct,
    deleteProduct,
};
