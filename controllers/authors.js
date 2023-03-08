const authors = require('../services/authors');

const postAuthor = async (req, res, next) => {
	try {
		res.json(await authors.create(req.body));
	} catch (err) {
		console.error(`Error while creating author `, err.message);
		next(err);
	}
};

const getAuthors = async (req, res, next) => {
	try {
		res.json(await authors.getMultiple(req.query.page));
	} catch (err) {
		console.error(`Error while getting authors `, err.message);
		next(err);
	}
};

module.exports = {
	getAuthors,
	postAuthor,
};
