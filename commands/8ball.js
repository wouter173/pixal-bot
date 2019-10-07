const config = require("../config");
const Command = require("../utils/class/Command");
const Embed = require("../utils/class/Embed");
const Error = require("../utils/class/Error");
const { roleColor } = require("../utils/color");

module.exports = class ball extends Command {

	constructor() {
		super("8ball", "Shake the 8ball.", `${config.prefix}8ball <question>`);
	}

	run(msg, args) {

		if (!args[0]) {
			return msg.channel.send(new Error("No question specified.", msg.author));
		}

		const possibilities = config.possibilities;
		let question = args.join(" ");
		if (question[question.length - 1] !== "?") { question += "?"; }

		const answer = possibilities[Math.floor(Math.random() * possibilities.length)];
		const desc = `**${msg.member.displayName}** asked: **${question}**\n\n:8ball: **${answer}**`;
		msg.channel.send(new Embed(roleColor(msg), "8ball", desc, msg.author));
	}
};