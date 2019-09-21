const config = require("../config.json");
const {
	success,
	error,
	noPerms
} = require("../utils/embed.js");

module.exports.run = (msg, args) => {
	if (!msg.member.permissions.has("KICK_MEMBERS")) return msg.channel.send(noPerms("KICK_MEMBERS", msg.author));
	const member = msg.mentions.members.first();
	if (!args.shift() || !member) return msg.channel.send(error("No user specified.", msg.author));
	if (member == msg.member) return msg.channel.send(error("You can't kick yourself.", msg.author));
	if (!member.kickable) return msg.channel.send(error("Can't kick this member", msg.author));
	let reason = "None";
	if (args[0]) reason = args.join(" ");
	member.kick(reason)
		.then(() => {
			return msg.channel.send(success(`Kicked: <@${member.id}>.\nReason: ${reason}.`, msg.author));
		}).catch((err) => {
			return msg.channel.send(error(err, msg.author));
		});
};

module.exports.data = {
	description: "Kick a user from your server.",
	usage: `${config.prefix}kick <@user> [reason]`
};