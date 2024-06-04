const Discord = require("discord.js"); //Setea el Discord
const functions = require("/app/modules/functions.js");

module.exports = {
  //Lo exporta a el bot.js con el message.js
  name: "channelpermission", //Nombre de comando
  cooldown: 5, //Tiempo para volver a usar el comando (en segundos)
  aliases: ["chperms", "channel-perms", "channelperms", "chper", "chperm", "channelpermissions"], //Aliases para usarlo
  description:
    "A command to help you configurating channel permissions! Note: The available permissions are 'ALL', 'MEMBER', 'READ' and 'NONE'.\nPermissions:\n- All: All permissions available except from the using slash commands one.\n- Member: With this option you will be able to view channel, send messages, add reactions, attach files and read message history.\n- Read: This one will give the selected users the permissions to view channel, read message history, add new reactions and react with external emojis.\n- None: All permissions will be quited to the member to talk on the selected channel.\nThere's also the `sync` mode which can copy the permissions of other channels or the channel's parent.\nExample: `pp!channelpermission #channel sync parent` or `pp!channelpermission #channel sync #channel`", //Descripción del comando
  guildOnly: true, //Si solo se puede usar en servidores
  ownerOnly: false, //Si solo lo puedo usar yo
  nsfwOnly: false, //Si solo se puede usar en canales NSFW
  usage: [
    "<channel id/channel mention> <role or user id/role or user mention> <permissions>",
    "<channel id/channel mention> sync <parent/channel mention/id>"
  ], //Uso del comando (solo args)
  permissions: ["MANAGE_CHANNELS"], //Permisos necesarios para ejecutar el comando
  botpermissions: ["MANAGE_CHANNELS" || "MANAGE_PERMISSIONS"], //Permisos del bot necesarios para ejecutar el comando
  enabled: true, //Si está encendido
  exec: async (client, message, args) => {
    //Ejecutar con async para el await

    //=============[CANAL OBJETIVO]==============
    const ch = args[0];
    if (!ch) return message.channel.send("You must provide a channel");
    const channel =
      message.guild.channels.cache.find(x => x.id == ch) ||
      message.mentions.channels.first();
    if (!channel) return message.channel.send("I couldn't find that channel");
    //=============[MODO SYNC]==============
    let sync = "SYNC, ASYNC, SINC";
    if (sync.includes(args[1].toUpperCase())) {
      const ch1 = args[2];
      if (!ch1)
        return message.channel.send(
          "You must provide an objective channel or parent"
        );
      if (args[3].toUpperCase() == "PARENT") {
        if (!ch.parent)
          return message.channel.send(
            "This channel has no parents to sync with!"
          );
        ch.lockPermissions();
      }

      const channel =
        message.guild.channels.cache.find(x => x.id == ch) ||
        ch.mentions.channels.first();
      if (!channel) return message.channel.send("I couldn't find that channel");
    }
    //=============[USUARIO O ROL OBJETIVO]==============
    const roleuser = args[1];
    if (!roleuser)
      return message.channel.send("You must provide a user or role");
    const rolee =
      message.mentions.roles.first() || message.guild.roles.cache.get(roleuser);

    const userr =
      message.guild.members.cache.get(roleuser) ||
      message.mentions.members.first();
    if (!userr && !rolee)
      return message.channel.send("I couldn't find that user or role");
    let objective = userr || rolee;
    //=============[OTROS]==============
    const perms = args[2].toUpperCase();
    let permlist = "ALL , MEMBER , READ , NONE";
    if (!perms)
      return message.channel.send(
        `What perms would you like to give?\nYou can choose \`ALL, MEMBER, READ or NONE\``
      );
    if (!permlist.includes(perms))
      return message.channel.send(
        `Hey, ${
          args[2]
        } isn't at the list.\nYou can choose \`ALL, MEMBER, READ or NONE\``
      );
    //=============[ADMIN]

    if (perms == "ALL" /*|| "ADMINISTRATOR" || "MANAGER" || "ADMIN"*/)
      channel.permissionOverwrites.create(objective, {
        SEND_MESSAGES: true,
        MANAGE_CHANNELS: true,
        MANAGE_ROLES: true,
        VIEW_CHANNEL: true,
        //MANAGE_CHANNEL: true,
        //MANAGE_PERMISSIONS: true,
        MANAGE_WEBHOOKS: true,
        CREATE_INSTANT_INVITE: true,
        ADD_REACTIONS: true,
        SEND_TTS_MESSAGES: true,
        MANAGE_MESSAGES: true,
        EMBED_LINKS: true,
        ATTACH_FILES: true,
        READ_MESSAGE_HISTORY: true,
        MENTION_EVERYONE: true,
        USE_EXTERNAL_EMOJIS: true,
        MANAGE_WEBHOOKS: true,
        USE_VAD: true
      });

    //=============[MEMBER]

    if (perms == "MEMBER" /*|| "USER" || "NORMAL" || "COMMON"*/)
      channel.permissionOverwrites.create(objective, {
        SEND_MESSAGES: true,
        MANAGE_CHANNELS: false,
        MANAGE_ROLES: false,
        VIEW_CHANNEL: true,
        //MANAGE_CHANNEL: false,
        //MANAGE_PERMISSIONS: false,
        MANAGE_WEBHOOKS: false,
        CREATE_INSTANT_INVITE: false,
        ADD_REACTIONS: true,
        VIEW_CHANNEL: true,
        SEND_MESSAGES: true,
        SEND_TTS_MESSAGES: true,
        MANAGE_MESSAGES: false,
        EMBED_LINKS: false,
        ATTACH_FILES: true,
        READ_MESSAGE_HISTORY: true,
        MENTION_EVERYONE: false,
        USE_EXTERNAL_EMOJIS: true,
        MANAGE_WEBHOOKS: false,
        USE_VAD: false
      });

    //=============[READ]
    if (perms == "READ" /*|| "INVITE" || "NEW" || "ONLYREAD"*/)
      channel.permissionOverwrites.create(objective, {
        SEND_MESSAGES: false,
        MANAGE_CHANNELS: false,
        MANAGE_ROLES: false,
        VIEW_CHANNEL: true,
        //MANAGE_CHANNEL: false,
        //MANAGE_PERMISSIONS: false,
        MANAGE_WEBHOOKS: false,
        CREATE_INSTANT_INVITE: false,
        ADD_REACTIONS: true,
        SEND_TTS_MESSAGES: false,
        MANAGE_MESSAGES: false,
        EMBED_LINKS: false,
        ATTACH_FILES: false,
        READ_MESSAGE_HISTORY: true,
        MENTION_EVERYONE: false,
        USE_EXTERNAL_EMOJIS: true,
        MANAGE_WEBHOOKS: false,
        USE_VAD: false
      });
    //=============[NONE]

    if (perms == "NONE" /*, "ZERO"*/)
      channel.permissionOverwrites.create(objective, {
        SEND_MESSAGES: false,
        MANAGE_CHANNELS: false,
        VIEW_CHANNEL: false,
        //MANAGE_CHANNEL: false,
        //MANAGE_PERMISSIONS: false,
        MANAGE_WEBHOOKS: false,
        CREATE_INSTANT_INVITE: false,
        ADD_REACTIONS: false,
        SEND_TTS_MESSAGES: false,
        MANAGE_MESSAGES: false,
        EMBED_LINKS: false,
        ATTACH_FILES: false,
        READ_MESSAGE_HISTORY: false,
        MENTION_EVERYONE: false,
        USE_EXTERNAL_EMOJIS: false,
        MANAGE_WEBHOOKS: false,
        USE_VAD: false
      });
    //=============[EJECUTAR]================
    message.channel.send(
      `I have succesfully updated the permissions of ${Discord.Util.cleanContent(
        objective.toString(),
        message
      )} for the ${channel} channel.`
    );
  }
};
