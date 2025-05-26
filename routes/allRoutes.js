const express = require('express');
const router = express.Router();
const {UsersController, BooksController, ReadingController} = require('../controllers/UsersController');


// usuários
router.post('/api/users', UsersController.createUser);
router.get('/api/users/:id', UsersController.searchProfile);

// livros
router.get('/api/livros', BooksController.listBooks);
router.get('/api/livros/buscar', BooksController.searchBook); 

// leituras
router.post('/api/leituras', ReadingController.createReading);
router.get('/api/leituras/user/:userId', ReadingController.booksByUser);
router.delete('/api/leituras/:readingId', ReadingController.deleteReading);

module.exports = router;