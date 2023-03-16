const express = require('express');
const router = express.Router();
const authorsController = require('../controllers/authors');

router.get('/', authorsController.getAuthors);
router.get('/:id', authorsController.getAuthorById);
router.post('/', authorsController.postAuthor);
router.put('/:id', authorsController.updateAuthor);
router.delete('/:id', authorsController.deleteAuthor);

module.exports = router;
