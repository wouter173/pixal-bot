const Discord = require("discord.js")
const commands = require("../utils/commands.js").getCommands()
const config = require("../config.json")

module.exports.run = (msg, args) => {
  const embed = new Discord.RichEmbed()
    .setTitle("test")

  commands.forEach(command => {
    let data = require(`./${command}.js`).data
    embed.addField(data.usage.toUpperCase(), `${data.description}`, true)
  });

  msg.channel.send(embed)
}

module.exports.data = {
  description: "Help command",
  usage: `${config.prefix}help`
}