const authors = require('../services/authors');

const getBooks = async (req, res) => {
	try {
		res.json(await authors.getMultiple(req.query.page));
	} catch (err) {
		console.error(`Error while getting authors `, err.message);
		next(err);
	}
};

module.exports = {
	getBooks,
};
