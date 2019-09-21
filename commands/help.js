const commands = require("../utils/commands.js").getCommands();
const config = require("../config.json");
const { roleColor } = require("../utils/color.js");
const { generator } = require("../utils/embed.js");

module.exports.run = (msg) => {
	const embed = generator(roleColor(msg), "HELP MENU", "", msg.author);

	commands.forEach(command => {
		let data = require(`./${command}.js`).data;
		embed.addField(data.usage, `${data.description}`, true);
	});

	msg.channel.send(embed);
};

module.exports.data = {
	description: "Help command.",
	usage: `${config.prefix}help`
};