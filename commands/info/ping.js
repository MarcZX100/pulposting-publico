const Discord = require("discord.js")

module.exports = {
  name: "ping",
  cooldown: 0,
  aliases: ["uptime"],
  description: "Ping!",
  permissions: [],
  guildOnly: false,
  enabled: true,
  exec: async (client, message, args) => {

    
   message.channel.send("Checking the ping...").then(botMsg => {
         const embed = new Discord.MessageEmbed()
    .setTitle("Ping Results")
    .setColor(client.color)
    .addField("API", `${botMsg.createdAt - message.createdAt}ms`)
    .addField("BOT", `${Math.round(message.client.ws.ping)}ms`)
    
     botMsg.edit({ embeds: [embed] });
 

  })
  }
};
