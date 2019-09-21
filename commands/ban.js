const config = require("../config.json");
const {
	success,
	error,
	noPerms
} = require("../utils/embed.js");

module.exports.run = (msg, args) => {
	if (!msg.member.permissions.has("BAN_MEMBERS")) { return msg.channel.send(noPerms("BAN_MEMBERS", msg.author)); }
	const member = msg.mentions.members.first();
	if (!args.shift() || !member) { return msg.channel.send(error("No user specified.", msg.author)); }
	if (member == msg.member) {return msg.channel.send(error("You can't ban yourself.", msg.author)); }
	if (!member.bannable) { return msg.channel.send(error("Can't ban this member", msg.author)); }
	let reason = "None";
	if (args[0]) { reason = args.join(" "); }
	member.ban(reason)
		.then(() => {
			return msg.channel.send(success(`Banned: <@${member.id}>.\nReason: ${reason}.`, msg.author));
		}).catch((err) => {
			return msg.channel.send(error(err, msg.author));
		});
};

module.exports.data = {
	description: "Ban a user from your server.",
	usage: `${config.prefix}ban <@user> [reason]`
};