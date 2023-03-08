const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function create(author) {
	const newAuthor = await db.query(
		`INSERT INTO authors 
		(firstname, lastname) 
    VALUES 
    (${author.firstname}, ${author.lastname})`
	);

	let message = 'Error creating author';

	if (newAuthor.affectedRows) {
		message = 'Author successfully created';
	}
	return {
		message,
	};
}

async function getMultiple(page = 1) {
	const offset = helper.getOffset(page, config.listPerPage);
	const rows = await db.query(
		`SELECT id, firstname, lastname
    FROM authors LIMIT ${offset},${config.listPerPage}`
	);
	const data = helper.emptyOrRows(rows);
	const meta = { page };

	return {
		data,
		meta,
	};
}

module.exports = {
	getMultiple,
	create,
};
