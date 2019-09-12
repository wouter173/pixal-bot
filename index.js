const Discord = require("discord.js");
const Client = new Discord.Client();

Client.on("ready", () => {
  console.log("ready")
})

Client.on("disconnect", () => {
  console.log("disconnected.")
})

Client.login(process.env.TOKEN)