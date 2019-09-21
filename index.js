const Discord = require("discord.js");
const commands = require("./utils/commands.js").getCommands();
const config = require("./config.json");
const Client = new Discord.Client();

Client.on("ready", () => {
	console.log("ready.");
});

Client.on("message", (msg) => {
	const args = msg.content.toLowerCase().split(" ");
	const cmdRaw = args.shift();

	if (!cmdRaw.startsWith(config.prefix)) return;
	if (msg.author.bot) return;

	const cmd = cmdRaw.split(config.prefix)[1];

	for (let i = 0; i < commands.length; i++) {
		if (cmd == commands[i]) require(`./commands/${commands[i]}.js`).run(msg, args);
	}
});

Client.login(process.env.TOKEN);