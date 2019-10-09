const Command = require("../utils/class/Command");
const Success = require("../utils/class/Success");
const Error = require("../utils/class/Error");
const NoPerms = require("../utils/class/NoPerms");
const { modlog } = require("../utils/logs");

module.exports = class ban extends Command {

	constructor() {
		super("ban", "Ban a user from your server.", "ban <@user> [reason]");
	}

	run(msg, args) {
		if (!msg.member.permissions.has("BAN_MEMBERS")) { return msg.channel.send(new NoPerms("BAN_MEMBERS", "ban a user.", msg.author)); }
		const member = msg.mentions.members.first();
		if (!args.shift() || !member) { return msg.channel.send(new Error("No user specified.", msg.author)); }
		if (member === msg.member) { return msg.channel.send(new Error("You can't ban yourself.", msg.author)); }
		if (!member.bannable) { return msg.channel.send(new Error("Can't ban this member", msg.author)); }
		let reason = "None";
		if (args[0]) { reason = args.join(" "); }
		member.ban(reason)
			.then(() => {
				modlog(msg, new Success(`Banned: <@${member.id}>.\nReason: ${reason}.`, msg.author));
				return msg.channel.send(new Success(`Banned: <@${member.id}>.\nReason: ${reason}.`, msg.author));
			}).catch((err) => {
				return msg.channel.send(new Error(err, msg.author));
			});
	}
};