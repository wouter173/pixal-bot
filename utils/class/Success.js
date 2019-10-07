const Embed = require("./Embed");

module.exports = class Success extends Embed {
	constructor(description, author) {
		super("03fc4a", "Success", description, author);
	}
};