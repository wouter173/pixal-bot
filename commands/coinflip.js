const config = require("../config");
const Command = require("../utils/class/Command");
const { roleColor } = require("../utils/color");
const { generator } = require("../utils/class/Embed");

module.exports = class coinflip extends Command {
	constructor() {
		super("coinflip", "Flip a coin.", `${config.prefix}coinflip`);
	}

	run(msg) {
		const coin = Math.random(2) > 0.5 ? ":white_circle: The coin flipped heads!" : ":black_circle: The coin flipped tails!";
		msg.channel.send(generator(roleColor(msg), "Flipping a coin!", coin, msg.author));
	}
};