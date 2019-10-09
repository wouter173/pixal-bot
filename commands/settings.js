const Command = require("../utils/class/Command");
const Embed = require("../utils/class/Embed");
const Error = require("../utils/class/Error");
const Success = require("../utils/class/Success");
const { roleColor } = require("../utils/color");
const { get, set } = require("../utils/models/Settings");

module.exports = class settings extends Command {
	constructor() {
		super("settings", "List and change the settings in your guild.", "settings [name] [value]");
	}

	async run(msg, args) {
		if (args[0] && args[1]) {

			switch (args[0]) {
			case "prefix":
				await set(msg, { prefix: args[1] });
				msg.channel.send(new Success(`Succesfully set prefix to: ${args[1]}`, msg.author));
				break;
			
			default:
				msg.channel.send(new Error(`PROPERTY '${args[0]}' DOESN'T EXIST`, msg.author));
				break;	
			}
		} else {
			const temp = await get(msg.guild.id);
			const formatted = `PREFIX : **${temp.prefix}**`;
			msg.channel.send(new Embed(roleColor(msg), "Settings", formatted, msg.author));
		}
	}
};