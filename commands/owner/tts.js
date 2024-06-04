const Discord = require("discord.js"); //Setea el Discord
const functions = require("/app/modules/functions.js") //Agarra las funciones
const discordTTS=require("discord-tts");
const tts = require("google-tts-api");

module.exports = { //Lo exporta a el bot.js con el message.js
  name: "tts", //Nombre de comando
  cooldown: 5, //Tiempo para volver a usar el comando (en segundos)
  aliases: ["testtospeech", "hasta los huevos del kdbot jodder"], //Aliases para usarlo
  description: "Ejemplo!", //Descripción del comando
  guildOnly: false, //Si solo se puede usar en servidores
  ownerOnly: true, //Si solo lo puedo usar yo
  nsfwOnly: false, //Si solo se puede usar en canales NSFW
  usage: "hola", //Uso del comando (solo args)
  permissions: [], //Permisos necesarios para ejecutar el comando
  botpermissions: [], //Permisos del bot necesarios para ejecutar el comando
  enabled: true, //Si está encendido
  exec: async (client, message, args) => { //Ejecutar con async para el await

    /*
    const broadcast = client.voice.createBroadcast();
        var channelId = message.member.voice.channel.id;
        var channel = client.channels.cache.get(channelId);
        channel.join().then(connection => {
            broadcast.play(discordTTS.getVoiceStream(args.toString()));
            const dispatcher=connection.play(broadcast);
        });
    */
    

  }
};
