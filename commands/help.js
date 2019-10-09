const Command = require("../utils/class/Command");
const Embed = require("../utils/class/Embed");
const { roleColor } = require("../utils/color");


module.exports = class help extends Command {

	constructor() {
		super("help", "Help command.", "help");
		this.commands = [];
	}

	run(msg, _args, prefix) {
		if (this.commands.length == 0) { this.commands = require("../utils/CommandManager").commands; }
		const embed = new Embed(roleColor(msg), "HELP MENU", "", msg.author);

		this.commands.forEach((command) => {
			embed.add(`${prefix}${command.usage}`, `${command.description}`);
		});

		msg.channel.send(embed);
	}
};