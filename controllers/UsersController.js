import pool from "../config/database.js";

// Controller de Usuários

export class UsersController {
static async createUser (req, res) {
  const { username } = req.body;
  
  if (!username) {
    return res.status(500).json({ erro: 'Username é obrigatório' });
  }

  try {
    // Verificar se usuário já existe
    
    const checkQuery = 'SELECT id FROM users WHERE username = $1';
    await pool.connect();
    const userExists = await pool.query(checkQuery, [username]);
    if (userExists.rows.length > 0) {
      return res.status(409).json({ erro: 'Usuário já cadastrado' });
    }
    
    // Criar novo usuário
    const insertQuery = 'INSERT INTO users (username) VALUES ($1) RETURNING *';
    const result = await pool.query(insertQuery, [username]);
    
    res.status(200).json({ user: result.rows[0] });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

static async searchProfile (req, res) {
  const userId = parseInt(req.params.id);
  
  if (isNaN(userId)) {
    return res.status(500).json({ erro: 'ID do usuário inválido' });
  }

  try {
    const query = 'SELECT * FROM users WHERE id = $1';
    const result = await pool.query(query, [userId]);
    
    if (result.rows.length === 0) {
      return res.status(500).json({ erro: 'Usuário não encontrado' });
    }
    
    res.status(200).json({ user: result.rows[0] });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};
}

export class BooksController {
// Controller de Livros
static async listBooks(req, res) {
  try {
    const result = await pool.query('SELECT * FROM book');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

static async searchBook(req, res) {
  const { title } = req.query;
  
  if (!title) {
    return res.status(500).json({ erro: 'Título é obrigatório' });
  }

  try {
    const result = await pool.query(
      'SELECT * FROM book WHERE LOWER(title) LIKE LOWER($1)',
      [`%${title}%`]
    );
    res.status(200).json({ books: result.rows });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};
}

export class ReadingController {
// Controller de Leitura
static async createReading(req, res) {
  const { userId, bookId, rating, reading_time, owned } = req.body;
  
  if (!userId || !bookId || rating === undefined) {
    return res.status(500).json({ erro: 'userId, bookId e rating são obrigatórios' });
  }

  // Validar nota (0-10)
  if (rating < 0 || rating > 10) {
    return res.status(500).json({ erro: 'A nota deve estar entre 0 e 10' });
  }

  try {
    // Verificar se usuário existe
    const userQuery = 'SELECT id FROM users WHERE id = $1';
    const userResult = await pool.query(userQuery, [userId]);
    
    if (userResult.rows.length === 0) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }

    // Verificar se livro existe
    const bookQuery = 'SELECT id FROM book WHERE id = $1';
    const bookResult = await pool.query(bookQuery, [bookId]);
    
    if (bookResult.rows.length === 0) {
      return res.status(404).json({ erro: 'Livro não encontrado' });
    }

    // Verificar se já existe uma leitura para este usuário e livro
    const existingQuery = 'SELECT * FROM users_book WHERE user_id = $1 AND book_id = $2';
    const existingResult = await pool.query(existingQuery, [userId, bookId]);
    
    if (existingResult.rows.length > 0) {
      return res.status(409).json({ erro: 'Leitura já cadastrada para este usuário e livro' });
    }

    // Criar nova leitura
    const insertQuery = `
      INSERT INTO users_book (user_id, book_id, rating, reading_time, owned) 
      VALUES ($1, $2, $3, $4, $5) 
      RETURNING *`;

    const values = [
      parseInt(userId),
      parseInt(bookId),
      parseFloat(rating),
      reading_time || null,
      owned || false
    ];
    
    const result = await pool.query(insertQuery, values);
    
    res.status(200).json({ leitura: result.rows[0] });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

static async booksByUser(req, res) {
  const userId = parseInt(req.params.userId);
  
  if (isNaN(userId)) {
    return res.status(500).json({ erro: 'ID do usuário inválido' });
  }

  try {
    const query = `
      SELECT ub.*, b.title, b.pub_year, g.genre_name
      FROM users_book ub
      JOIN book b ON ub.book_id = b.id
      LEFT JOIN genre g ON b.book_genre = g.id
      WHERE ub.user_id = $1
      ORDER BY b.title
    `;
    const result = await pool.query(query, [userId]);
    
    res.status(200).json({ users_book: result.rows });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

static async deleteReading(req, res) {
  const readingId = parseInt(req.params.id);

  try {
    const result = await pool.query(
      'DELETE FROM users_book WHERE book_id = $1 RETURNING *',
      [readingId]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ erro: 'Leitura não encontrada' });
    }

    res.status(200).send();
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

}
