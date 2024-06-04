const Discord = require('discord.js');

module.exports.mention = (message, prefix, bot) => {
    let embed = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setAuthor(bot.user.username, bot.user.displayAvatarURL())
        .setDescription('My prefix in this guild is `' + prefix + '`.\nUse `' + prefix + 'help` to view my commands.');

    return message.channel.send(embed);
};

module.exports.nsfw = (interaction, command) => {
    let embed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('ERROR! - Not a NSFW channel')
        .setDescription('The '+command+' command is marked as NSFW. Use NSFW commands in a NSFW channel.')

    return interaction.reply({embeds:[embed]});
};

module.exports.permissions = (interaction, command) => {
    let embed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('ERROR! - Access restricted')
        .setDescription('You are not allowed to use this command.\nRequired permissions: `' + command.permissions.join("`, `") + '`.');

    return interaction.reply({embeds:[embed]});
};

module.exports.botpermissions = (interaction, command) => {
    let embed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('ERROR! - Bot permissions required')
        .setDescription('I am not allowed to use this command.\nRequired permissions: `' + command.botpermissions.join("`, `") + '`.');

    return interaction.reply({embeds:[embed]});
};

module.exports.cooldown = (interaction, time, command) => {
    let embed = new Discord.MessageEmbed()
        .setColor('#ECB100')
        .setTitle('WARNING! - Slow down a bit')
        .setDescription('You have to wait '+time+' seconds to use the `'+command+'` command again!');

    return interaction.reply({ embeds: [embed]});
};
module.exports.owner = (interaction, command) => {
    let embed = new Discord.MessageEmbed()
        .setColor('#ECB100')
        .setTitle('WARNING! - Acces denied')
        .setDescription('The `'+command+'` command is marked as Owner Only. That means only the owners are able to use it.');

    return interaction.reply({ embeds: [embed]});
};
module.exports.languages = (client, message) => {
  let embed = new Discord.MessageEmbed()
  .setColor(client.color)
  .setDescription("- Here you have the full languages list:\n\nAfrikaans (af), Albanian (sq), Amharic (am), Arabic (ar), Armenian (hy), Azerbaijani (az), Basque (eu), Belarusian (be), Bengali (bn), Bosnian (bs), Bulgarian (bg), Catalan (ca), Cebuano (ceb), Chichewa (ny), Chinese - Simplified (zh-CN), Chinese Traditional (zh-TW), Corsican (co), Croatian (cr), Czech (cs), Danish (da), Dutch (nl), English (en), Esperanto (eo), Estonian (et), Filipino (tl), Finnish (fi), French (fr), Frisian (fy), Galician (gl), Georgian (ka), German (de), Greek (el), Gujarati (gu), Haitian Creole (ht), Hausa (ha), Hawaiian (haw), Hebrew (he), Hebrew (iw), Hindi (hi), Hmong (hmn), Hungarian (hu), Icelandic (is), Igbo (ig), Indonesian (id), Irish (ga), Italian (it), Japanese (ja), Javanese (jw), Kannada (kn), Kazakh (kk), Khmer (km), Korean (ko), Kurdish - Kurmanji (ku), Kyrgyz (ky), Lao (lo), Latin (la), Latvian (lv), Lithuanian (lt), Luxembourgish (lb), Macedonian (mk), Malagasy (mg), Malay (ms), Malayalam (ml), Maltese (mt), Maori (mi),  Marathi (mr), Mongolian (mn), Myanmar - Burmese (my), Nepali (ne), Norwegian (no), Pashto (ps), Persian (fa), Polish (pl), Portuguese (pt), Panjabi (pa), Romanian (ro), Russian (ru), Samoan (sm), Scots - Gaelic (gd), Serbian (sr), Sesotho (st), Shona (sn), Sindhi (sd), Sinhala (si), Slovak (sk), Slovenian (sl), Somali (so), Spanish (es), Sundanese (su), Swahili (sw), Swedish (sv), Tajik (tg), Tamil (ta), Telugu (te), Thai (th), Turkish (tr), Ukrainian (uk), Urdu (ur), Uzbek (uz), Vietnamese (vi), Welsh (cy), Xhosa (xh), Yiddish (yi), Yoruba (yo), Zulu (zu)")
  .setTitle("Languages")
  return message.channel.send(embed)
};
module.exports.validlang = (client, message) => {
    let embed = new Discord.MessageEmbed()
        .setColor(client.config.colors.error)
        .setTitle('You must provide a valid language!')
        .setDescription("- Valid language codes:\n\nAfrikaans (af), Bulgarian (bg), Chinese - Simplified (zh-CN), Dutch (nl), English (en), Estonian (et), French (fr), German (de), Hindi (hi), Hungarian (hu), Italian (it), Japanese (ja), Korean (ko), Latin (la), Zulu (zu)")
        .setFooter("To see the complete language list, do use \`pp!language --list\`")
    return message.channel.send(embed);
};
