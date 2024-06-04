const Discord = require("discord.js");
const guildModel = require("../models/guildModel");
module.exports = async guild => {
  await guildModel.create({
    guildID: guild.id,
    prefix: "pp!"
  });
  guild.language = "en";

  const embed = new Discord.MessageEmbed()
    .setTitle("Me han añadido a un servidor!")
    .setDescription(
      `ID: ${guild.id}\nName: ${guild.name}\nRoles: ${
        guild.roles.cache.size
      }\nMiembros: ${guild.memberCount}\nDueño: ${
        guild.members.cache.find(x => x.id == guild.ownerId)
          ? guild.members.cache.find(x => x.id == guild.ownerId).user.tag
          : "No hay / Error"
      }\n${
        guild.members.cache.find(x => x.id == guild.ownerId)
          ? guild.members.cache.find(x => x.id == guild.ownerId).user.id
          : "No hay / Error"
      }`
    )
    .setImage(guild.iconURL())
    .setColor(guild.client.config.colors.success) //Color(?
    .setTimestamp(new Date().toString());
  guild.client.channels.cache
    .get("762595704421482506")
    .send({ embeds: [embed] });
  console.log(
    `New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`
  );
  guild.client.user.setActivity(
    `pp!help | Connected to ${guild.client.guilds.cache.size} servers and ${guild.client.users.cache.size} users!`
  );
}
