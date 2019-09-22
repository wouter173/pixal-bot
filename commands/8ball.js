const config = require("../config.json");
const { generator, error } = require("../utils/embed.js");
const { roleColor } = require("../utils/color.js");

module.exports.run = (msg, args) => {
	if (!args[0]) {
		return msg.channel.send(error("No question specified.", msg.author));
	}
	const possibilities = config.possibilities;
	let question = args.join(" ");
	if (question[question.length - 1] !== "?") { question += "?"; }

	const answer = possibilities[Math.floor(Math.random() * possibilities.length)];
	const desc = `**${msg.member.displayName}** asked: **${question}**\n\n:8ball: **${answer}**`;
	msg.channel.send(generator(roleColor(msg), "8ball", desc, msg.author));
};

module.exports.data = {
	description: "Shake the 8ball.",
	usage: `${config.prefix}8ball <question>`
};