const Discord = require("discord.js")
const { letterTrans } = require('custom-translate');
const dictionary = require('../../modules/text/morse.json');

module.exports = {
	name: 'morse',
	cooldown: 5,
	aliases: ['morsetext', 'morsetxt'],
	description: 'This command transforms your oration into a cool morse code!',
	guildOnly: false,
  ownerOnly: false, 
	usage: 'text',
  permissions: [],
  enabled: true,
	exec: async (client, message, args) => {

    const morse = args.slice(0).join(' ');
       if(!morse) return message.reply("You must give me something to translate.")
    const morsetxt = morse.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    message.channel.send(letterTrans(morsetxt, dictionary, ' '));
    
    
    
    
	},
}
