import pool from '../config/database.js';

export class Reading {
  static async getAll() {
   const result = await pool.query(`
    SELECT 
      ub.id,
      ub.user_id,
      ub.book_id,
      ub.reading_date,
      b.title,
      b.pub_year,
      g.genre_name,
      u.username
    FROM users_book ub
    JOIN book b ON ub.book_id = b.id
    JOIN users u ON ub.user_id = u.id
    LEFT JOIN genre g ON b.book_genre = g.id
    ORDER BY u.username, b.title
  `);
  return result.rows;
  }

  static async getByUser(userId) {
    const result = await pool.query(`
  SELECT ub.id, ub.reading_date, b.title, b.pub_year
  FROM users_book ub
  JOIN book b ON ub.book_id = b.id
  WHERE ub.user_id = $1
  ORDER BY b.title
`, [userId]);
return result.rows;
  }

  static async getByBook(bookId) {
    const result = await pool.query(`
      SELECT ub.*, u.username
      FROM users_book ub
      JOIN users u ON ub.user_id = u.id
      WHERE ub.book_id = $1
      ORDER BY u.username
    `, [bookId]);
    return result.rows;
  }

  static async getByUserAndBook(userId, bookId) {
    const result = await pool.query(`
      SELECT ub.*, b.title, u.username
      FROM users_book ub
      JOIN book b ON ub.book_id = b.id
      JOIN users u ON ub.user_id = u.id
      WHERE ub.user_id = $1 AND ub.book_id = $2
    `, [userId, bookId]);
    return result.rows[0];
  }

  static async create(data) {
    const result = await pool.query(
      'INSERT INTO users_book (user_id, book_id, rating, reading_time, owned) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [data.user_id, data.book_id, data.rating, data.reading_time, data.owned]
    );
    return result.rows[0];
  }

  static async update(userId, bookId, data) {
    const result = await pool.query(
      'UPDATE users_book SET rating = $1, reading_time = $2, owned = $3 WHERE user_id = $4 AND book_id = $5 RETURNING *',
      [data.rating, data.reading_time, data.owned, userId, bookId]
    );
    return result.rows[0];
  }

  static async delete(userId, bookId) {
    const result = await pool.query(
      'DELETE FROM users_book WHERE user_id = $1 AND book_id = $2 RETURNING *',
      [userId, bookId]
    );
    return result.rowCount > 0;
  }

  static async deleteByBookId(bookId) {
    const result = await pool.query(
      'DELETE FROM users_book WHERE book_id = $1 RETURNING *',
      [bookId]
    );
    return result.rowCount > 0;
  }

    static async exists(userId, bookId) {
      const result = await pool.query(
        'SELECT * FROM users_book WHERE user_id = $1 AND book_id = $2',
        [userId, bookId]
      );
      return result.rows.length > 0;
    }
  }