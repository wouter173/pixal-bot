const fs = require("fs");

module.exports.getCommands = () => {
  let commands = [];

  fs.readdirSync("./commands").forEach(file => {
    commands.push(file.split(".")[0]);
  });

  return commands;
}

module.exports.getCommandFiles = () => {
  let commands = [];

  fs.readdirSync("./commands").forEach(file => {
    commands.push(file);
  });

  return commands;
}