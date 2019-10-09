const Command = require("../utils/class/Command");
const Success = require("../utils/class/Success");
const Error = require("../utils/class/Error");
const NoPerms = require("../utils/class/NoPerms");
const { modlog } = require("../utils/logs");

module.exports = class kick extends Command {

	constructor() {
		super("kick", "Kick a user from your server.", "kick <@user> [reason]");
	}

	run(msg, args) {
		if (!msg.member.permissions.has("KICK_MEMBERS")) { return msg.channel.send(new NoPerms("KICK_MEMBERS", "kick a user.", msg.author)); }
		const member = msg.mentions.members.first();
		if (!args.shift() || !member) { return msg.channel.send(new Error("No user specified.", msg.author)); }
		if (member === msg.member) { return msg.channel.send(new Error("You can't kick yourself.", msg.author)); }
		if (!member.kickable) { return msg.channel.send(new Error("Can't kick this member", msg.author)); }
		let reason = "None";
		if (args[0]) { reason = args.join(" "); }
		member.kick(reason)
			.then(() => {
				modlog(msg, new Success(`Kicked: <@${member.id}>.\nReason: ${reason}.`, msg.author));
				return msg.channel.send(new Success(`Kicked: <@${member.id}>.\nReason: ${reason}.`, msg.author));
			}).catch((err) => {
				return msg.channel.send(new Error(err, msg.author));
			});
	}
};