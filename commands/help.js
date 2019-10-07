const Command = require("../utils/class/Command");
const config = require("../config");
const Embed = require("../utils/class/Embed");
const { roleColor } = require("../utils/color");


module.exports = class help extends Command {

	constructor() {
		super("help", "Help command.", `${config.prefix}help`);
		this.commands = [];
	}

	run(msg) {
		if (this.commands.length == 0) { this.commands = require("../utils/CommandManager").commands; }
		const embed = new Embed(roleColor(msg), "HELP MENU", "", msg.author);

		this.commands.forEach((command) => {
			embed.add(command.usage, `${command.description}`, true);
		});

		msg.channel.send(embed);
	}
};