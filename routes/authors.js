const express = require('express');
const router = express.Router();
const authorsController = require('../controllers/authors');

/* GET programming languages. */
router.get('/', authorsController.getBooks);

module.exports = router;
