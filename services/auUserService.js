const db = require('../config/db');

const AuUserService = {
  getAll: async () => {
    const res = await db.query('SELECT * FROM au_users ORDER BY id');
    return res.rows;
  },

  getByCreatorId: async (userId) => {
    const result = await db.query(
      `SELECT * FROM au_users WHERE created_by = $1 ORDER BY created_at DESC`,
      [userId]
    );
    return result.rows;
  },
  

  getById: async (id) => {
    const res = await db.query('SELECT * FROM au_users WHERE id = $1', [id]);
    return res.rows[0];
  },

  create: async (data) => {
    const {
      name, address, age, phone, email, product_id, area_of_production,
      aadhar, pan, documentary_proof, annual_production, annual_turnover,
      years_of_production, association_id, signature_uploaded, aadhar_uploaded,
      pan_uploaded
    } = data;

    const res = await db.query(
      `INSERT INTO au_users (
        name, address, age, phone, email, product_id, area_of_production,
        aadhar, pan, documentary_proof, annual_production, annual_turnover,
        years_of_production, association_id, signature_uploaded, aadhar_uploaded,
        pan_uploaded, updated_at
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
        $11, $12, $13, $14, $15, $16, $17, NOW()
      ) RETURNING *`,
      [name, address, age, phone, email, product_id, area_of_production,
       aadhar, pan, documentary_proof, annual_production, annual_turnover,
       years_of_production, association_id, signature_uploaded, aadhar_uploaded,
       pan_uploaded]
    );
    return res.rows[0];
  },

  update: async (id, data) => {
    const {
      name, address, age, phone, email, product_id, area_of_production,
      aadhar, pan, documentary_proof, annual_production, annual_turnover,
      years_of_production, association_id, signature_uploaded, aadhar_uploaded,
      pan_uploaded
    } = data;

    const res = await db.query(
      `UPDATE au_users SET
        name = $1, address = $2, age = $3, phone = $4, email = $5, product_id = $6,
        area_of_production = $7, aadhar = $8, pan = $9, documentary_proof = $10,
        annual_production = $11, annual_turnover = $12, years_of_production = $13,
        association_id = $14, signature_uploaded = $15, aadhar_uploaded = $16,
        pan_uploaded = $17, updated_at = NOW()
      WHERE id = $18 RETURNING *`,
      [name, address, age, phone, email, product_id, area_of_production,
       aadhar, pan, documentary_proof, annual_production, annual_turnover,
       years_of_production, association_id, signature_uploaded, aadhar_uploaded,
       pan_uploaded, id]
    );
    return res.rows[0];
  },

  delete: async (id) => {
    await db.query('DELETE FROM au_users WHERE id = $1', [id]);
    return { message: 'AU User deleted' };
  }
};

module.exports = AuUserService;
