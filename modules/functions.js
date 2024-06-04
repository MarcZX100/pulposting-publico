const Discord = require('discord.js');

module.exports.color = (message) => {
    var emcolor = [0];
    if (message.guild) emcolor = message.guild.me.displayHexColor;
    if (!message.guild) emcolor = message.client.config.colors.general;
    return emcolor;
};
module.exports.lang = (message) => {
    var lang = [];
    if (message.guild) lang = message.guild.language;
    if (!message.guild) lang = "en";
  return lang;
};
module.exports.checkDays = (date) => {
         let now = new Date();
         let diff = now.getTime() - date.getTime();
         let days = Math.floor(diff / 86400000);
         return days + (days == 1 ? " day" : " days") + " ago";
};
module.exports.translate = async (content, client) => {
   let transla = require('@vitalets/google-translate-api');
  await transla(content, { to: client.lang }).then(res => {
  return res.text; // OUTPUT: You are amazing!
})
  };
// if you want to export only one function
// declare it normally and then export it
