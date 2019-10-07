const Embed = require("./Embed");

module.exports = class Error extends Embed{
	constructor(error, author) {
		super("fc1303", "Error", error, author);
	}
};