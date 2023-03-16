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

const getAuthorById = async (req, res, next) => {
	try {
		res.json(await authors.getOne(req.params.id));
	} catch (err) {
		console.error(`Error while getting this author `, err.message);
		next(err);
	}
};

const updateAuthor = async (req, res, next) => {
	try {
		res.json(await authors.update(req.params.id, req.body));
	} catch (err) {
		console.log(`Error while updating author `, err.message);
		next(err);
	}
};

const deleteAuthor = async (req, res, next) => {
	try {
		res.json(await authors.deleteAuthor(req.params.id));
	} catch (err) {
		console.error(`Error while deleting this author `, err.message);
		next(err);
	}
};

module.exports = {
	getAuthors,
	getAuthorById,
	postAuthor,
	updateAuthor,
	deleteAuthor,
};
