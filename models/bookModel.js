import pool from '../config/database.js';

export class Book {
  static async getAll() {
    const result = await pool.query(`
      SELECT b.*, g.genre_name 
      FROM book b 
      LEFT JOIN genre g ON b.book_genre = g.id 
      ORDER BY b.title
    `);
    return result.rows;
  }

  static async getById(id) {
    const result = await pool.query(`
      SELECT b.*, g.genre_name 
      FROM book b 
      LEFT JOIN genre g ON b.book_genre = g.id 
      WHERE b.id = $1
    `, [id]);
    return result.rows[0];
  }

  static async searchByTitle(title) {
    const result = await pool.query(`
      SELECT b.*, g.genre_name 
      FROM book b 
      LEFT JOIN genre g ON b.book_genre = g.id 
      WHERE LOWER(b.title) LIKE LOWER($1)
      ORDER BY b.title
    `, [`%${title}%`]);
    return result.rows;
  }

  static async getByGenre(genreId) {
    const result = await pool.query(`
      SELECT b.*, g.genre_name 
      FROM book b 
      LEFT JOIN genre g ON b.book_genre = g.id 
      WHERE b.book_genre = $1
      ORDER BY b.title
    `, [genreId]);
    return result.rows;
  }

  static async create(data) {
    const result = await pool.query(
      'INSERT INTO book (title, pub_year, book_genre) VALUES ($1, $2, $3) RETURNING *',
      [data.title, data.pub_year, data.book_genre]
    );
    return result.rows[0];
  }

  static async update(id, data) {
    const result = await pool.query(
      'UPDATE book SET title = $1, pub_year = $2, book_genre = $3 WHERE id = $4 RETURNING *',
      [data.title, data.pub_year, data.book_genre, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await pool.query('DELETE FROM book WHERE id = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }

  static async exists(id) {
    const result = await pool.query('SELECT id FROM book WHERE id = $1', [id]);
    return result.rows.length > 0;
  }
}
