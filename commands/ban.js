const config = require("../config");
const Command = require("../utils/class/Command");
const { success, error, noPerms } = require("../utils/class/Embed");
const { modlog } = require("../utils/logs");

module.exports = class ban extends Command {

	constructor() {
		super("ban", "Ban a user from your server.", `${config.prefix}ban <@user> [reason]`);
	}

	run(msg, args) {
		if (!msg.member.permissions.has("BAN_MEMBERS")) { return msg.channel.send(noPerms("BAN_MEMBERS", "ban a user.", msg.author)); }
		const member = msg.mentions.members.first();
		if (!args.shift() || !member) { return msg.channel.send(error("No user specified.", msg.author)); }
		if (member === msg.member) { return msg.channel.send(error("You can't ban yourself.", msg.author)); }
		if (!member.bannable) { return msg.channel.send(error("Can't ban this member", msg.author)); }
		let reason = "None";
		if (args[0]) { reason = args.join(" "); }
		member.ban(reason)
			.then(() => {
				modlog(msg, success(`Banned: <@${member.id}>.\nReason: ${reason}.`, msg.author));
				return msg.channel.send(success(`Banned: <@${member.id}>.\nReason: ${reason}.`, msg.author));
			}).catch((err) => {
				return msg.channel.send(error(err, msg.author));
			});
	}
};