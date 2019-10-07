const Discord = require("discord.js");

module.exports = class Embed {
	constructor(color, title, description, author) {
		this.embed = new Discord.RichEmbed()
			.setTitle(title)
			.setColor(color)
			.setDescription(description)
			.setFooter(author.username, author.avatarURL)
			.setTimestamp();
	}

	get() {
		return this.embed;
	}

	add(title, description, inline) {
		this.embed.addField(title, description, inline);
	}
};