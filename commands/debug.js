const Command = require("../utils/class/Command");
const Success = require("../utils/class/Success");
const {get} = require("../utils/models/Settings");

module.exports = class debug extends Command {
	constructor() {
		super("debug", "debug", "debug");
	}

	async run(msg) {
		const temp = await get(msg.guild.id);
		msg.channel.send(new Success(`${temp}`, msg.author));
	}
};