const db = require('../config/db');

const UserService = {
  getAllUsers: async () => {
    const result = await db.query('SELECT * FROM users ORDER BY user_id');
    return result.rows;
  },

  getUserById: async (id) => {
    const result = await db.query('SELECT * FROM users WHERE user_id = $1', [id]);
    return result.rows[0];
  },

  createUser: async (user) => {
    const {
      username, password, role, is_staff = true, is_admin = false, created_by = null,
    } = user;
    const result = await db.query(
      `INSERT INTO users (username, password, role, is_staff, is_admin, created_by, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW()) RETURNING *`,
      [username, password, role, is_staff, is_admin, created_by]
    );
    return result.rows[0];
  },

  updateUser: async (id, user) => {
    const { username, password, role, is_staff, is_admin } = user;
    const result = await db.query(
      `UPDATE users SET
         username = $1,
         password = $2,
         role = $3,
         is_staff = $4,
         is_admin = $5,
         updated_at = NOW()
       WHERE user_id = $6 RETURNING *`,
      [username, password, role, is_staff, is_admin, id]
    );
    return result.rows[0];
  },

  deleteUser: async (id) => {
    await db.query('DELETE FROM users WHERE user_id = $1', [id]);
    return { message: 'User deleted successfully' };
  },
};

module.exports = UserService;
