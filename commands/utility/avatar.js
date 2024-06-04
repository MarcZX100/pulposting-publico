module.exports = {
	name: 'avatar',
	aliases: ['profilepicture', 'pfp'],
	description: 'Displays the avatar of any user!', 
  permissions: [],
	usage: "<user id/user mention>",
	guildOnly: false,
  enabled: true,
	exec: async (client, message, args) => {
    
	const Discord = require('discord.js');	
		
  let user = message.mentions.members.first() || message.guild.members.cache.find(x => x.id == args[0]) || message.member;//Sino menciono a naadie


const embed = new Discord.MessageEmbed()
.setColor(client.color)
.setAuthor(message.author.tag, message.author.avatarURL({ format: 'png', dynamic: true, size: 2048 }))
.setTitle(`${user.user.tag}\'s profile photo`)
.setDescription(`[128 px](${user.user.avatarURL({ format: 'png', dynamic: true, size: 128 })})  |  [256 px](${user.user.avatarURL({ format: 'png', dynamic: true, size: 256 })})  |  [512 px](${user.user.avatarURL({ format: 'png', dynamic: true, size: 512 })})  |  [1024 px](${user.user.avatarURL({ format: 'png', dynamic: true, size: 1024 })})  |  **2048 px**`)
.setImage(user.user.avatarURL({ format: 'png', dynamic: true, size: 2048 }))
message.channel.send({ embeds: [embed] })
		
	},
};
