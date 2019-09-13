const fs = require("fs");
const dir = "./commands"

module.exports.getCommands = () => {
  let commands = []
  fs.readdirSync(dir).forEach(file => {
    commands.push(file.split(".")[0])
  });
  return commands
}

module.exports.getCommandFiles = () => {
  let commands = []
  fs.readdirSync(dir).forEach(file => {
    commands.push(file)
  });
  return commands
}