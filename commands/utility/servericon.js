const Discord = require("discord.js"); //Setea el Discord
const functions = require("/app/modules/functions.js") //Agarra las funciones

module.exports = { //Lo exporta a el bot.js con el message.js
  name: "servericon", //Nombre de comando
  cooldown: 5, //Tiempo para volver a usar el comando (en segundos)
  aliases: ["icon", "svicon", "svimage"], //Aliases para usarlo
  description: "Displays the actual server's image!", //Descripción del comando
  guildOnly: true, //Si solo se puede usar en servidores
  ownerOnly: false, //Si solo lo puedo usar yo
  nsfwOnly: false, //Si solo se puede usar en canales NSFW
  usage: "", //Uso del comando (solo args)
  permissions: [], //Permisos necesarios para ejecutar el comando
  botpermissions: [], //Permisos del bot necesarios para ejecutar el comando
  enabled: true, //Si está encendido
  exec: async (client, message, args) => { //Ejecutar con async para el await

    
    const embed = new Discord.MessageEmbed()
.setColor(client.color)
.setAuthor(message.author.tag, message.guild.iconURL({size : 2048, dynamic: true}))
.setTitle(`${message.guild.name}\'s icon`)
.setDescription(`[128 px](${message.guild.iconURL({size : 128, dynamic: true})})  |  [256 px](${message.guild.iconURL({size : 256, dynamic: true})})  |  [512 px](${message.guild.iconURL({size : 512, dynamic: true})})  |  [1024 px](${message.guild.iconURL({size : 1024, dynamic: true})})  |  **2048 px**`)
.setImage(message.guild.iconURL({size : 2048, dynamic: true}))
message.channel.send({embeds:[embed]})
    

  }
};
