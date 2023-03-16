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

async function getOne(id) {
	const result = await db.query(
		`SELECT *
    FROM authors WHERE id=${id}`
	);

	return {
		result,
	};
}

async function getOneByName(id) {
	const result = await db.query(
		`SELECT *
    FROM authors WHERE id=${id}`
	);

	return {
		result,
	};
}

async function update(id, author) {
	const result = await db.query(
		`UPDATE authors 
    SET firstname="${author.firstname}", lastname="${author.lastname}" 
    WHERE id=${id}`
	);

	let message = 'Error in updating author';

	if (result.affectedRows) {
		message = 'Author successfully updated';
	}

	return { message };
}

async function deleteAuthor(id) {
	const result = await db.query(
		`DELETE
    FROM authors WHERE id=${id}`
	);

	let message = 'Error in deleting author';

	if (result.affectedRows) {
		message = 'Author successfully deleted';
	}

	return { message };
}

module.exports = {
	getMultiple,
	getOne,
	create,
	update,
	deleteAuthor,
};
