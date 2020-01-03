let books = [];
let id = 0;

module.exports = {
	read: (req, res) => {
		res.status(200).send(books);
	}
};
