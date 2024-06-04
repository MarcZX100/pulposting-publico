module.exports = {
	name: 'createemoji',
	cooldown: 5,
	aliases: ['cemoji', 'newemoji', 'ce', 'create-emoji'],
	description: 'Creates a new emoji from an image link!',
	guildOnly: true,
	usage: '<emoji name> <file>',
  	enabled: true, 
 	permissions: ["MANAGE_EMOJIS"],
  exec: async (client, message, args) => {
	  
    const name = args[0]
    if(!name) return message.reply("You must say the new emoji name!\nCorrect usage: `pp!create-emoji laugh https://images.all-free-download.com/images/graphiclarge/laughing_and_pointing_emoticon_312207.jpg`");
    if(name.size > 30 || name.size < 2) return message.reply("The emoji name should be between 2 - 30.");
    const link = args[1] || message.attachments[0]
    message.guild.emojis.create(`${link}`, `${name}`).then(e => {
		message.reply(`The ${e} emoji was created`)
    })
}}
