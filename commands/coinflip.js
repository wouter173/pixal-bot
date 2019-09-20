const config = require("../config.json")
const {
  RoleColor
} = require("../utils/color.js")
const {
  generator
} = require("../utils/embed.js")

module.exports.run = (msg, args) => {
  coin = Math.random(2) > 0.5 ? ":white_circle: The coin flipped heads!" : ":black_circle: The coin flipped tails!"
  msg.channel.send(generator(RoleColor(msg), "Flipping a coin!", coin, msg.author))
}

module.exports.data = {
  description: "Flip a coin.",
  usage: `${config.prefix}coinflip`
}