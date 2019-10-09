const Command = require("../utils/class/Command");
const Success = require("../utils/class/Success");
const NoPerms = require("../utils/class/NoPerms");
const Error = require("../utils/class/Error");
const { modlog } = require("../utils/logs");

module.exports = class purge extends Command {
	constructor() {
		super("purge", "Delete a number of messages from your channel.", "purge <count>");
	}

	run(msg, args) {
		if (!msg.member.permissions.has("MANAGE_CHANNELS")) { return msg.channel.send(new NoPerms("MANAGE_CHANNELS", "You need this permission to purge messages", msg.author)); }
		if (!args[0]) { return msg.channel.send(new Error("No message count specified.", msg.author)); }
		if (args[0] > 100 || args[0] < 0) { return msg.channel.send(new Error("Count has to be between 0 and 100", msg.author)); }
		if (!msg.channel.manageable) { return msg.channel.send(new Error("The bot needs channel management permissions to purge a channel.", msg.author)); }
		msg.channel.bulkDelete(args[0])
			.then(() => {
				return modlog(msg, new Success(`purged: ${args[0]} messages in <#${msg.channel.id}>`, msg.author));
			})
			.catch((err) => {
				return msg.channel.send(new Error(err, msg.author));
			});
	}
};