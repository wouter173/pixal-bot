const Command = require("../utils/class/Command");

module.exports = class debug extends Command {
	constructor() {
		super("debug", "debug", "debug");
	}

	run(msg) {
		console.log(msg.guild.emojis);
		msg.channel.send("<:github:630122662496043019>");
		msg.channel.send("<:website:630087079208157228>");
		msg.channel.send("debug!");
	}
};