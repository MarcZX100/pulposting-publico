const Discord = require("discord.js");

module.exports = {
  name: "jumbo",
  cooldown: 5,
  aliases: ["bigemoji", "hugemoji"],
  description: "Displays the URL of the given emoji!",
  guildOnly: false,
  usage: "<emoji>",
  enabled: true,
  permissions: [],
  exec: async (client, message, args) => {
    if (!args) return message.reply("You must display the emote you want!");
    let emoji =client.discord.Util.parseEmoji(args[0]); // || client.emojis.cache.get("305818615712579584") || message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1])
    if (!emoji) return message.reply("You must display the emote you want!"); //para que diga solo personalizados
    message.channel.send(emoji.animated ? "https://cdn.discordapp.com/emojis/"+emoji.id+".gif" : "https://cdn.discordapp.com/emojis/"+emoji.id+".png"); //enviamos
  }
};
