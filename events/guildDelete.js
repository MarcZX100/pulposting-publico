const Discord = require("discord.js");
module.exports = async guild => {
 
  const embed = new Discord.MessageEmbed()
    .setTitle("Me han eliminado de un servidor!")
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
    .setColor(guild.client.config.colors.error) //Color(?
    .setTimestamp(new Date().toString());
  guild.client.channels.cache
    .get("762595704421482506")
    .send({ embeds: [embed] });
  console.log(
    `Removed from guild: ${guild.name} (id: ${guild.id}). This guild had ${guild.memberCount} members!`
  );
  guild.client.user.setActivity(
    `pp!help | Connected to ${guild.client.guilds.cache.size} servers and ${guild.client.users.cache.size} users!`
  );
}
