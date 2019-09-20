const commands = require("../utils/commands.js").getCommands()
const config = require("../config.json")
const {
  RoleColor
} = require("../utils/color.js")
const {
  generator
} = require("../utils/embed.js")

module.exports.run = (msg, args) => {
  const embed = generator(RoleColor(msg), "HELP MENU", "", msg.author)

  commands.forEach(command => {
    let data = require(`./${command}.js`).data
    embed.addField(data.usage, `${data.description}`, true)
  });

  msg.channel.send(embed)
}

module.exports.data = {
  description: "Help command.",
  usage: `${config.prefix}help`
}