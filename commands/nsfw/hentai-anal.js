const Discord = require("discord.js"); //Setea el Discord
const fetch = require("node-fetch");
const akaneko = require("akaneko");

module.exports = { //Lo exporta a el bot.js con el message.js
  name: "hentai-ass", //Nombre de comando
  cooldown: 5, //Tiempo para volver a usar el comando (en segundos)
  aliases: ["hass", "hentaiass"], //Aliases para usarlo
  description: "An NSFW Hentai command which displays random ass images!", //Descripción del comando
  guildOnly: false, //Si solo se puede usar en servidores
  ownerOnly: false, //Si solo lo puedo usar yo
  nsfwOnly: true, //Si solo se puede usar en canales NSFW
  usage: "", //Uso del comando (solo args)
  permissions: [], //Permisos necesarios para ejecutar el comando
  enabled: true, //Si está encendido
  exec: async (client, message, args) => { //Ejecutar con async para el await
   
    var lang = [];
    if (message.guild) lang = message.guild.language;
    if (!message.guild) lang = message.channel.language;
  
    let url;

    url = await akaneko.nsfw.orgy();
    let emb = new Discord.MessageEmbed()
      .setTitle("Hentai Ass")
      .setImage(url)
      .setFooter("Akaneko Api")
      .setColor(client.color)
 message.channel.send({ embeds: [emb] }).catch();

  }
};
