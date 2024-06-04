const Discord = require("discord.js"); //Setea el Discord
const functions = require("/app/modules/functions.js") //Agarra las funciones

module.exports = { //Lo exporta a el bot.js con el message.js
  name: "dm", //Nombre de comando
  cooldown: 5, //Tiempo para volver a usar el comando (en segundos)
  aliases: ["senddm"], //Aliases para usarlo
  description: "Comando de owner!", //Descripción del comando
  guildOnly: false, //Si solo se puede usar en servidores
  ownerOnly: true, //Si solo lo puedo usar yo
  nsfwOnly: false, //Si solo se puede usar en canales NSFW
  usage: "sexo", //Uso del comando (solo args)
  permissions: [], //Permisos necesarios para ejecutar el comando
  botpermissions: [], //Permisos del bot necesarios para ejecutar el comando
  enabled: true, //Si está encendido
  exec: async (client, message, args) => { //Ejecutar con async para el await

    
    const mencion = args[0]
    const texto = args.slice(1).join(' ')
    const user = message.mentions.users.first() || client.users.cache.find(user => user.id === mencion)
    
await user.send(texto).catch(() => {
   message.channel.send("User has DMs closed or has no mutual servers with the bot:(");
});
    

  }
};
