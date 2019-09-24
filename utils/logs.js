const { noPerms } = require("./embed.js");

const existsChannel = async(guild, name, type) => {
	const channel = guild.channels.find((channel) => channel.name === name && channel.type === type);
	if (channel) { return channel; }
	return false;
};

const createChannel = async(guild, name, data) => {
	const category = guild.createChannel(name, data)
		.catch(() => { throw "Error"; });
	return category;
};

module.exports.modlog = async(msg, data) => {
	msg.delete();

	var category = await existsChannel(msg.guild, "pixal", "category");
	if (!category) {
		category = await createChannel(msg.guild, "pixal", {"type": "category"})
			.catch(() => { msg.channel.send(noPerms("MANAGE_CHANNELS", "Make pixal category with logs.", msg.author)); });
	}

	var modlog = await existsChannel(msg.guild, "modlog", "text");
	if (!modlog || modlog.parentID !== category.id) {
		modlog = await createChannel(msg.guild, "modlog", {"type": "text", "parent": category})
			.catch(() => { msg.channel.send(noPerms("MANAGE_CHANNELS", "Make pixal category with logs.", msg.author)); });
	}

	modlog.send(data)
		.catch(() => { msg.channel.send(noPerms("SEND_MESSAGES", "Send messages in modlog channel.", msg.author)); });
};