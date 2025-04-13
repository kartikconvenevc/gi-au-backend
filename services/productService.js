const db = require('../config/db');

const ProductService = {
  getAllProducts: async () => {
    const result = await db.query('SELECT * FROM products ORDER BY product_id');
    return result.rows;
  },

  getProductById: async (id) => {
    const result = await db.query('SELECT * FROM products WHERE product_id = $1', [id]);
    return result.rows[0];
  },

  createProduct: async ({ name, association_id }) => {
    const result = await db.query(
      'INSERT INTO products (name, association_id) VALUES ($1, $2) RETURNING *',
      [name, association_id]
    );
    return result.rows[0];
  },

  updateProduct: async (id, { name, association_id }) => {
    const result = await db.query(
      `UPDATE products SET name = $1, association_id = $2
       WHERE product_id = $3 RETURNING *`,
      [name, association_id, id]
    );
    return result.rows[0];
  },

  deleteProduct: async (id) => {
    await db.query('DELETE FROM products WHERE product_id = $1', [id]);
    return { message: 'Product deleted successfully' };
  }
};

module.exports = ProductService;
