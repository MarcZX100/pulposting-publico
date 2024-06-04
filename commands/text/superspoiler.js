const Discord = require("discord.js")

module.exports = {
	name: 'superspoiler',
	cooldown: 5,
	aliases: ['super-spoiler', 'spoiler'],
	description: 'Transforms each character into a spoiler message!',
	guildOnly: false,
  ownerOnly: false, 
	usage: 'text',
  permissions: [],
  enabled: true,
	exec: async (client, message, args) => {

    
const txt = `${args}`
if(!txt) return message.reply("You must give me something to translate.")
    
    						if (`||${txt.split('').join('||||')}||`.length > 2000) return message.reply('There was an error, your text is too long.');
    		 message.channel.send(`||${txt.split('').join('||||')}||`);

	},
};
