module.exports = class Command {
	constructor(name, desc, usage) {
		this.name = name;
		this.description = desc;
		this.usage = usage;
	}

	run(msg) {
		msg.channel.send("template response!");
	}
};