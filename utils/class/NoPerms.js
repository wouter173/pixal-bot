const Embed = require("./Embed");

module.exports = class NoPerms extends Embed {
	constructor(permision, description, author) {
		super("fc6b03", "No Permision", `**${permision}** \nUsed to: ${description}`, author);
	}
};