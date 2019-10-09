const commands = [];

const initialize = (command) => {
	commands.push(new command());
};

// initialize(require("../commands/debug"));

initialize(require("../commands/help"));
initialize(require("../commands/source"));

initialize(require("../commands/ban"));
initialize(require("../commands/kick"));
initialize(require("../commands/purge"));

initialize(require("../commands/8ball"));
initialize(require("../commands/coinflip"));

initialize(require("../commands/settings"));


module.exports.commands = commands;