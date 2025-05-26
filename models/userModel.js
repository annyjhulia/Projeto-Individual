import pool from '../config/database.js';

export class User {
  static async getAll() {
    const result = await pool.query('SELECT * FROM users ORDER BY username');
    return result.rows;
  }

  static async getById(id) {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async getByUsername(username) {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    return result.rows[0];
  }

  static async create(data) {
    const result = await pool.query(
      'INSERT INTO users (username) VALUES ($1) RETURNING *',
      [data.username]
    );
    return result.rows[0];
  }

  static async update(id, data) {
    const result = await pool.query(
      'UPDATE users SET username = $1 WHERE id = $2 RETURNING *',
      [data.username, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }

  static async exists(id) {
    const result = await pool.query('SELECT id FROM users WHERE id = $1', [id]);
    return result.rows.length > 0;
  }
}