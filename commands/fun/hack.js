const Discord = require("discord.js"); //Setea el Discord
const functions = require("/app/modules/functions.js"); //Agarra las functions
var faker = require("faker")

module.exports = {
  //Lo exporta a el bot.js con el message.js
  name: "hack", //Nombre de comando
  cooldown: 5, //Tiempo para volver a usar el comando (en segundos)
  aliases: ["bypass", "hackkk"], //Aliases para usarlo
  description: "Hacks an user!", //Descripción del comando
  guildOnly: false, //Si solo se puede usar en servidores
  ownerOnly: false, //Si solo lo puedo usar yo
  nsfwOnly: false, //Si solo se puede usar en canales NSFW
  usage: "<optional user>", //Uso del comando (solo args)
  permissions: [], //Permisos necesarios para ejecutar el comando
  botpermissions: [], //Permisos del bot necesarios para ejecutar el comando
  enabled: true, //Si está encendido
  exec: async (client, message, args) => {
    //Ejecutar con async para el await
const user = message.mentions.users.first() || message.author;


    message.channel.send(`Hacking ${user.tag} now...`).then(async msg => {
      try {
        await new Promise(resolve => setTimeout(resolve, 3000));
        msg.edit("[▖] Finding discord login... (2fa bypassed)");
        await new Promise(resolve => setTimeout(resolve, 5000));
        msg.edit(
          `[▘] Found:\n**Email: ** \`${faker.internet.email(user.username, user.discriminator)}\`\n**Password: ** \`${faker.internet.password(10, true)+faker.internet.password(3)}\`\n**MAC: ** \`${faker.internet.mac()}\`\n**IP: ** \`${faker.internet.ip()}\``
        );
        await new Promise(resolve => setTimeout(resolve, 3000));
        msg.edit(
          "[▝] Fetching dms with closest friends (if there are any friends at all)"
        );
        await new Promise(resolve => setTimeout(resolve, 2000));
        msg.edit('[▗] **Last DM:** "I hope no one sees my nudes folder"');
        await new Promise(resolve => setTimeout(resolve, 2000));
        msg.edit("[▖] Finding most common word...");
        await new Promise(resolve => setTimeout(resolve, 2000));
        msg.edit("[▘] `const mostCommonWord: string = 'small';`");
        await new Promise(resolve => setTimeout(resolve, 2000));
        msg.edit("[▝] Injecting trojan virus into discriminator #" + user.discriminator);
        await new Promise(resolve => setTimeout(resolve, 2000));
        msg.edit("[▗] Virus injected, emotes stolen ");
       await new Promise(resolve => setTimeout(resolve, 2000));
        msg.edit("[▖] Setting up Epic Store account..");
        await new Promise(resolve => setTimeout(resolve, 2000));
        msg.edit("[▘] Hacking Epic Store account....");
        await new Promise(resolve => setTimeout(resolve, 1500));
        msg.edit("[▝] Finding User´s PC");
        await new Promise(resolve => setTimeout(resolve, 4000));
        msg.edit("[▗] **User agent:** "+faker.internet.userAgent());
        await new Promise(resolve => setTimeout(resolve, 2000));
        msg.edit("[▖] Selling data to the Government...");
               await new Promise(resolve => setTimeout(resolve, 2000));
        msg.edit("[▘] Data sold for 1 pound and a bubblegum");
        await new Promise(resolve => setTimeout(resolve, 2000));
        msg.edit("[▝] Reporting account to Discord for breaking TOS...");
        await new Promise(resolve => setTimeout(resolve, 2000));
        msg.edit("Finished hacking, Hail Hydra.");
      } catch {}
    });
  }
};
