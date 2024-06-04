const Discord = require("discord.js")
module.exports = {
	name: 'vote',
	cooldown: 5,
	aliases: ['topgg'],
	description: 'Vote for the bot at top.gg!',
	guildOnly: false,
  ownerOnly: false, 
	usage: '',
  permissions: [],
  enabled: true,
	exec: async (client, message, args) => {

const vote = new Discord.MessageEmbed()
.setColor(client.color)
.setTitle("Vote Pages")
.addField("Vote at top.gg",`[Link](https://top.gg/bot/758388900468883466/vote)`)
.addField("Vote at discordbotlist.com",`[Link](https://discordbotlist.com/bots/pulposting/upvote)`)
.setTimestamp(new Date())

    message.channel.send({ embeds: [vote] })
    
	},
};
