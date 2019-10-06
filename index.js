const Discord = require("discord.js");
const config = require("./config");

const commands = require("./utils/CommandManager").commands;
const Client = new Discord.Client();

Client.on("ready", () => {
	console.log("ready.");
	Client.user.setPresence({
		status: "idle",
		game: {
			type: "WATCHING",
			name: "Commands"
		}
	});
});

Client.on("message", (msg) => {
	const args = msg.content.toLowerCase().split(" ");
	const cmdRaw = args.shift();

	if (msg.author.bot) { return; }
	if (!cmdRaw.startsWith(config.prefix)) { return; }

	const cmd = cmdRaw.split(config.prefix)[1];
	
	for (let i = 0; i < commands.length; i++) {
		if (cmd == commands[i].name) { commands[i].run(msg, args); }
	}
});

Client.login(process.env.TOKEN);