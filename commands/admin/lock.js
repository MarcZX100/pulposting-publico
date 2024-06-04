module.exports = {
	name: 'lock',
	cooldown: 10,
	aliases: ['channellock', 'antiraid'],
	description: 'Locks the current channel!',
	guildOnly: true,
  ownerOnly: false, 
	usage: '',
  permissions: ["MANAGE_MESSAGES"],
  enabled: true,
	exec: async (client, message, args) => {
		
    const channel = message.channel
  channel.permissionOverwrites.edit(message.guild.roles.everyone, { 
                    SEND_MESSAGES: false //esto hace que el rol everyone cambie los permisos, a que no puedan mandar mensajes en ningun canal
                }).then(() => {
   message.channel.send(`The ${channel} channel was succesfully locked!`)
              });     
    
      	},
  };
