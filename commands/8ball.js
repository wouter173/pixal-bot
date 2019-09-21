const config = require("../config.json");
const { generator, error } = require("../utils/embed.js");
const { roleColor } = require("../utils/color.js");

module.exports.run = (msg, args) => {
	if (!args.shift()) {
		return msg.channel.send(error("No question specified.", msg.author));
	}
	const question = args.join(" ");
	const desc = `${msg.member.displayName} seeks an answer for: ${question}\n`;
	msg.channel.send(generator(roleColor(msg), "8ball", desc, msg.author));
};

module.exports.data = {
	description: "Shake the 8ball.",
	usage: `${config.prefix}8ball <question>`
};