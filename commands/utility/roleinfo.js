const moment = require('moment');
const { MessageEmbed } = require('discord.js');
//const { util: { permissions } } = require('discord.js-commando');

module.exports = {
	name: 'roleinfo',
	cooldown: 5,
	aliases: ['ri', 'role-info', 'inforole', 'role'],
	description: 'Info of a role!', 
  permissions: [],
	guildOnly: false,
	usage: '[role id/mention/name]',
	enabled: true,
  exec: async (client, message, args) => {
		
		
if (!args) return message.reply("You must enter a role!")
const role = message.guild.roles.cache.find(x => x.name === args.join(" ")) || message.guild.roles.cache.find(x => x.id == args[0]) || message.mentions.roles.first();
       if (!role) return message.reply("Display the role´s id, mention or name!")
		const serialized = role.permissions.toArray();
		const embed = new MessageEmbed()
			.setColor(role.hexColor == "#000000" ? client.color : role.hexColor)
			.addField('❯ Name', role.name)
			.addField('❯ ID', role.id)
	  	.addField('❯ Users with it', role.members.size.toString())
			.addField('❯ Color', role.hexColor.toUpperCase())
			.addField('❯ Creation Date',`<t:${(role.createdTimestamp.toString()).slice(0, -3)}>. (<t:${(role.createdTimestamp.toString()).slice(0, -3)}:R>)`)
			.addField('❯ Hoisted?', role.hoist ? 'Yes' : 'No')
			.addField('❯ Mentionable?', role.mentionable ? 'Yes' : 'No')
			.addField('❯ Position', role.position.toString())
			.addField('❯ Permissions', serialized.toString() || 'None');
		return message.channel.send({embeds: [embed]});
	}
}
