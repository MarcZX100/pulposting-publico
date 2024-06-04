const Discord = require("discord.js"); //Setea el Discord
const functions = require("/app/modules/functions.js") //Agarra las functions
const soyultro = require("soyultro").soyultro

module.exports = { //Lo exporta a el bot.js con el message.js
  name: "cry", //Nombre de comando
  cooldown: 5, //Tiempo para volver a usar el comando (en segundos)
  aliases: [], //Aliases para usarlo
  description: "Why are you sad? ...!", //Descripción del comando
  guildOnly: true, //Si solo se puede usar en servidores
  ownerOnly: false, //Si solo lo puedo usar yo
  nsfwOnly: false, //Si solo se puede usar en canales NSFW
  usage: "", //Uso del comando (solo args)
  permissions: [], //Permisos necesarios para ejecutar el comando
  botpermissions: [], //Permisos del bot necesarios para ejecutar el comando
  enabled: true, //Si está encendido
  exec: async (client, message, args) => { //Ejecutar con async para el await
     let url = await soyultro("cry")
let frase1 = "is crying"

    let embed = new Discord.MessageEmbed() //Preferible mandarlo en un Embed ya que la respuesta es un link
    .setTitle(`${message.author.tag} ${frase1} T.T`)
    .setColor(client.color)
    .setImage(url);
    
  message.channel.send({embeds:[embed]})    
    
  }
};
