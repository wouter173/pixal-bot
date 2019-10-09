const Command = require("../utils/class/Command");
const Embed = require("../utils/class/Embed");
const { roleColor } = require("../utils/color");

module.exports = class source extends Command {

	constructor() {
		super("source", "Get the source of this bot.", "source");
	}

	run(msg) {
		const links = [
			"<:github:630122662496043019> [Github](https://github.com/wouter173/pixal), the source code.",
			"<:website:630087079208157228> [Wouter173](https://wouter173.nl), the mastermind."
		];

		const embed = new Embed(roleColor(msg), "Source", links.join("\n\n"), msg.author);
		msg.channel.send(embed);
	}
};