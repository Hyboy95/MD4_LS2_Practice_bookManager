const express = require('express');
const BookController = require('../controllers/book.controller');
const router = express.Router();

router.get('/', BookController.displayListBook);
router.get('/create', BookController.getNewBookPage);
router.post('/create', BookController.addNewBook);
router.get('/delete', BookController.deleteBook);
router.get('/update', BookController.getUpdatePage);
router.post('/update', BookController.updateBook);

module.exports = router;