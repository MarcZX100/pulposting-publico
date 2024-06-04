const Discord = require("discord.js");

module.exports = {
  name: "say",
  cooldown: 5,
  aliases: ["s"],
  description: "The bot will say whatever you want!",
  permissions: [],
  guildOnly: false,
  enabled: true,
  exec: async (client, message, args) => {
    var arg = message.content
      .split(" ")
      .slice(1)
      .join(" ");

    if (!arg) return message.reply("What do you want me to say?");
    message.channel.send({ content: arg, allowedMentions: { parse: [] } });
    if (message.deletable) message.delete();
  }
};

