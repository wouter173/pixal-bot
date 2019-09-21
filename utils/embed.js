const Discord = require("discord.js");

module.exports.generator = (color, title, description, author) => {
	const embed = new Discord.RichEmbed()
		.setTitle(title)
		.setColor(color)
		.setDescription(description)
		.setFooter(author.username, author.avatarURL)
		.setTimestamp();

	return embed;
};

module.exports.noPerms = (permision, author) => {
	return this.generator("fc6b03", "No Permision", permision, author);
};

module.exports.error = (error, author) => {
	return this.generator("fc1303", "Error", error, author);
};

module.exports.success = (description, author) => {
	return this.generator("03fc4a", "Success", description, author);
};