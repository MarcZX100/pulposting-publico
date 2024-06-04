const Discord = require("discord.js"); //Setea el Discord

module.exports = { //Lo exporta a el bot.js con el message.js
  name: "emojiurl", //Nombre de comando
  cooldown: 5, //Tiempo para volver a usar el comando (en segundos)
  aliases: ["emoji-url", "getemojiurl"], //Aliases para usarlo
  description: "This command sends you the url of any emoji by giving it's id!", //Descripción del comando
  guildOnly: false, //Si solo se puede usar en servidores
  ownerOnly: false, //Si solo lo puedo usar yo
  nsfwOnly: false, //Si solo se puede usar en canales NSFW
  usage: "<id> <gif/png>", //Uso del comando (solo args)
  permissions: [], //Permisos necesarios para ejecutar el comando
  botpermissions: [], //Permisos del bot necesarios para ejecutar el comando
  enabled: true, //Si está encendido
  exec: async (client, message, args) => { //Ejecutar con async para el await

    
    
    

  }
};
