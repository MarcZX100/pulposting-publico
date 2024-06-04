const akaneko = require("akaneko");
const Discord = require("discord.js");
module.exports = {
  //Lo exporta a el bot.js con el message.js
  name: "hentai-orgy", //Nombre de comando
  cooldown: 5, //Tiempo para volver a usar el comando (en segundos)
  aliases: ["horgy", "h-orgy"], //Aliases para usarlo
  description: "This command sends you random NSFW Hentai orgy images!", //Descripción del comando
  guildOnly: false, //Si solo se puede usar en servidores
  ownerOnly: false, //Si solo lo puedo usar yo
  nsfwOnly: true, //Si solo se puede usar en canales NSFW
  usage: "", //Uso del comando (solo args)
  permissions: [], //Permisos necesarios para ejecutar el comando
  enabled: true, //Si está encendido
  exec: async (client, message, args) => {
    //Ejecutar con async para el await
    var lang = [];
    if (message.guild) lang = message.guild.language;
    if (!message.guild) lang = message.channel.language;
  
    let url;

    url = await akaneko.nsfw.orgy();
    let emb = new Discord.MessageEmbed()
      .setTitle("Hentai Orgy")
      .setImage(url)
      .setFooter("Akaneko Api")
      .setColor(client.color)
 message.channel.send({ embeds: [emb] }).catch();

  }
};
