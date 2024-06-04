const Danbooru = require("danbooru");
const booru = new Danbooru();
const Discord = require("discord.js"); //Setea el Discord

module.exports = {
  //Lo exporta a el bot.js con el message.js
  name: "yaoi", //Nombre de comando
  cooldown: 5, //Tiempo para volver a usar el comando (en segundos)
  aliases: ["gayhentai", "hgay"], //Aliases para usarlo
  description: "This command sends you random Yaoi Hentai images!", //Descripción del comando
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

    booru
      .posts({
        random: "true",
        tags: "yaoi order:date"
      })
      .then(posts => {
        const index = Math.floor(Math.random() * posts.length);
        const post = posts[index];

        const url = booru.url(post.large_file_url);
        const embed = new Discord.MessageEmbed()
          .setTitle("Hentai Yaoi")
          .setColor(client.color)
          .setImage(url)
          .setFooter(`Requested by ${message.member.displayName}`)
        message.channel.send({ embeds: [embed] });
      });
  }
};
