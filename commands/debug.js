const Command = require("../utils/class/Command");
// const Embed = require("../utils/class/Embed");
const Error = require("../utils/class/Error");

module.exports = class debug extends Command {
	constructor() {
		super("debug", "debug", "debug");
	}

	run(msg) {
		msg.channel.send(new Error("blabla", msg.author));
	}
};