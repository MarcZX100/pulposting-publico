const Discord = require("discord.js"); //Setea el Discord

module.exports = {
  //Lo exporta a el bot.js con el message.js
  name: "setchannel", //Nombre de comando
  cooldown: 5, //Tiempo para volver a usar el comando (en segundos)
  aliases: ["setch", "channelconfig"], //Aliases para usarlo
  description: "This command changes the channel's configuration!", //Descripción del comando
  guildOnly: true, //Si solo se puede usar en servidores
  ownerOnly: false, //Si solo lo puedo usar yo
  nsfwOnly: false, //Si solo se puede usar en canales NSFW
  usage: "[option] [configuration] <channel mention/channel id>", //Uso del comando (solo args)
  permissions: ["MANAGE_CHANNELS"], //Permisos necesarios para ejecutar el comando
  botpermissions: ["MANAGE_CHANNELS"], //Permisos del bot necesarios para ejecutar el comando
  enabled: true, //Si está encendido
  exec: async (client, message, args) => {
    //Ejecutar con async para el await
    let funcionlist = "nsfw, cooldown";
    let funcion = args[0];
    let truefalse = "true, false";
    let option = args[1];
    let channel =
      message.mentions.channels.first() ||
      message.guild.channels.cache.find(x => x.id == args[2]) ||
      message.channel;
    if (!funcion)
      return message.reply(
        `Please, use one of the available functions. Actual function list: ${funcionlist}`
      );
    if (!funcionlist.includes(funcion.toLowerCase()))
      return message.reply(
        `Please, use one of the available functions. Actual function list: ${funcionlist}`
      );
    if (funcionlist.includes(funcion.toLowerCase())) {
      if (funcion.toLowerCase() == "nsfw") {
        const variable = message.channel.nsfw ? "false" : "true";
        message.channel.send("Changing channel configuration...").then(msg => {
          channel.edit({ nsfw: variable }).then(ch => {
            msg.edit("Done!");
          });
        });
      }
    }

    if (funcion.toLowerCase() == "cooldown") {
      if (!option)
        return message.reply(
          `Please, use a number to set as cooldown seconds.`
        );
      if (option > 21600)
        return message.reply(
          `The seconds quantity should be 21600 (6 hours) or lower.`
        );
      if (option < 0)
        return message.reply(
          `The seconds quantity should be 0 (no cooldown) or bigger`
        );
      if (isNaN(option))
        return message.reply(
          `Please, return the number of seconds you would like to set as cooldown. Remember it will be set as seconds!`
        );
      if (!isNaN(option)) {
        message.channel.send("Changing channel configuration...").then(msg => {
          channel
            .setRateLimitPerUser(option, [`Action done by ${message.author}.`])
            .then(ch => {
              msg.edit("Done!");
            });
        });
      }
    }
  }
};
