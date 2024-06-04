const Discord = require("discord.js"); //Setea el Discord
const functions = require("/app/modules/functions.js")
const moment = require("moment")

module.exports = { //Lo exporta a el bot.js con el message.js
  name: "youngestmember", //Nombre de comando
  cooldown: 5, //Tiempo para volver a usar el comando (en segundos)
  aliases: ["youngest", "newest", "newestmember"], //Aliases para usarlo
  description: "This command displays the 10 newest members at this guild!", //Descripción del comando
  guildOnly: true, //Si solo se puede usar en servidores
  ownerOnly: false, //Si solo lo puedo usar yo
  nsfwOnly: false, //Si solo se puede usar en canales NSFW
  usage: "", //Uso del comando (solo args)
  permissions: [], //Permisos necesarios para ejecutar el comando
  botpermissions: [], //Permisos del bot necesarios para ejecutar el comando
  enabled: true, //Si está encendido
  exec: async (client, message, args) => { //Ejecutar con async para el await
 
    
    let memb = message.guild.members.cache.filter(m => !m.user.bot).sort((a,b) => b.joinedTimestamp - a.joinedTimestamp).first(10)
    const embed = new Discord.MessageEmbed()
    .setTitle(`Newest Member of ${message.guild}`)
    .setColor(client.color)
memb.forEach(m => embed.addField(`${m} - ${m.user.tag}`, `The user ${m.user.username} with the ID ${m.user.id} was joined \nthe <t:${(m.joinedTimestamp.toString()).slice(0, -3)}>. (<t:${(m.joinedTimestamp.toString()).slice(0, -3)}:R>)`)
            )
  // .setDescription(memb.map((m) => `• ${m} (${m.user.tag} with ID ${m.user.id}). Joined ${functions.checkDays(m.joinedAt)}`).join("\n"));

    message.channel.send({embeds:[embed]})
    
  }
};
