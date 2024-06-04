const Discord = require("discord.js")

module.exports = {
	name: 'invites',
	cooldown: 5,
	aliases: ['topinvites', 'invitelist'],
	description: 'List of the invites!',
	guildOnly: true,
  ownerOnly: false, 
	usage: '',
  permissions: [],
  enabled: true,
	exec: async (client, message, args) => {

    const invites = await message.guild.invites.fetch();
    const topTen = invites.filter((inv) => inv.uses > 0).sort((a, b) => b.uses - a.uses).first(10);

    if(topTen.length === 0) return message.reply("There are no invites, or none of them have been used!");

    const inv = new Discord.MessageEmbed()
      .setTitle(`Top Invites in ${message.guild.name}`)
      .setColor(client.color)
      .setAuthor(message.guild.name, message.guild.iconURL())
      .setDescription(topTen.map((inv) => `• **${inv.inviter.username}**'s invite **${inv.code}** has **${inv.uses.toLocaleString()}** uses.`).join("\n"));
message.channel.send({ embeds: [inv]})
    
	},
};
