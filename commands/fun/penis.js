const Discord = require("discord.js");
module.exports = {
  name: "penis",
  cooldown: 5,
  aliases: ["pp", "pito", "dick"],
  description: "Penis!",
  permissions: [],
  guildOnly: false,
  enabled: true,
  exec: async (client, message, args) => {

    var facts = [
      "8D",
      "8=D",
      "8==D",
      "8===D",
      "8====D",
      "8=====D",
      "8======D",
      "8=======D",
      "8========D",
      "8=========D"
    ];
    var fact = Math.floor(Math.random() * facts.length);

    const embed = new Discord.MessageEmbed()
      .setTitle(`*${message.author.username}\'s penis O.o*`)
      .setDescription(facts[fact])
      .setColor(client.color)
      .setTimestamp(new Date().toString())
      .setFooter("Nice penis bro 10/10");
    message.channel.send({ embeds: [embed] });
  }
};
