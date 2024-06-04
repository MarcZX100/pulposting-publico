module.exports = {
  name: "channellist",
  cooldown: 5,
  aliases: ["cl", "channels"],
  description: "List of the channels of this guild!",
  permissions: [],
  guildOnly: true,
  enabled: true,
  exec: async (client, message, args) => {
    const lepush = (q, c) => {
      if (c.type == "GUILD_TEXT") {
        c.threads.cache.size > 0
          ? q.push(
              `#️⃣ ${c.name}` +
                "\n" +
                c.threads.cache
                  .map(th => "> <:thread:912627488448974858> " + th.name)
                  .join("\n")
            )
          : q.push(`#️⃣ ${c.name}`);
      } else if (c.type == "GUILD_VOICE") q.push(`🔊 ${c.name}`);
      else if (c.type == "GUILD_NEWS") q.push(`📣 ${c.name}`);
      else if (c.type == "GUILD_STORE") q.push(`🏷️ ${c.name}`);
      else if (c.type == "GUILD_CATEGORY") q.push(`\n> ${c.name}`);
      else if (c.type == "GUILD_STAGE_VOICE")
        q.push(`<:stage:912248748158103553> ${c.name}`);
      else q.push(`#️⃣ ${c.name}`);
    };

    let categorias = message.guild.channels.cache
      .filter(q => q.type == "GUILD_CATEGORY")
      .sort((p, c) => p.rawPosition - c.rawPosition);
    let canales = [];

    message.guild.channels.cache
      .filter(q => q.type != "GUILD_CATEGORY")
      .filter(q => !q.parentId)
      .sort((p, c) => p.rawPosition - c.rawPosition)
      .forEach(c => lepush(canales, c));
    categorias.forEach(c => {
      lepush(canales, c);
      message.guild.channels.cache
        .filter(q => q.parentId == c.id)
        .sort((p, c) => p.rawPosition - c.rawPosition)
        .forEach(c => lepush(canales, c));
    });

    if (canales.length > 2048) {
      const Discord = require("discord.js");
      const embed1 = new Discord.MessageEmbed()
        .setTitle(`Channel list of this server`)
        .setColor(client.color)
        .setDescription(canales.join("\n"))
        .setTimestamp(new Date());
      message.channel.send({ embeds: [embed1] });
    }
    if (canales.length < 2048) {
      const Discord = require("discord.js");
      const embed1 = new Discord.MessageEmbed()
        .setTitle(`Channel list of this server`)
        .setColor(client.color)
        .setDescription(canales.join("\n").slice(0, 2048))
        .setTimestamp(new Date());
      message.channel.send({ embeds: [embed1] });
    } else {
      const Discord = require("discord.js");
      const embed1 = new Discord.MessageEmbed()
        .setTitle(`Channel list of this server`)
        .setColor(client.color)
        .setDescription(canales.join("\n").slice(2000, 4000))
        .setTimestamp(new Date());
      message.channel.send({ embeds: [embed1] });
    }
  }
};
