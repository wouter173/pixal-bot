const Discord = require("discord.js");
const mongoose = require("mongoose");
const { get } = require("./utils/models/Settings");

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

Client.on("message", async (msg) => {
	const args = msg.content.toLowerCase().split(" ");
	const cmdRaw = args.shift();
	const { prefix } = await get(msg.guild.id);

	if (msg.author.bot) { return; }
	if (!cmdRaw.startsWith(prefix)) { return; }

	const cmd = cmdRaw.split(prefix)[1];
	
	for (let i = 0; i < commands.length; i++) {
		if (cmd == commands[i].name) { commands[i].run(msg, args, prefix); }
	}
});

mongoose.connect("mongodb://localhost:27017/pixal", {
	useNewUrlParser: true,
	useUnifiedTopology: true 
});

Client.login(process.env.TOKEN);