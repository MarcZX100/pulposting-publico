const Discord = require("discord.js");
const functions = require("/app/modules/functions.js"); //Agarra las functions
const { inspect } = require("util");

let candela = 50;
let potato = 50;

module.exports = {
  name: "eval",
  aliases: ["e"],
  description: "Eval command",
  permissions: [],
  guildOnly: false,
  cooldown: 0,
  ownerOnly: true,
  nsfwOnly: false,
  enabled: true,
  exec: async (client, message, args) => {
    let toEval = args.join(" ");

    const clean = text => {
      if (typeof text === "string")
        return text
          .replace(/`/g, "`" + String.fromCharCode(8203))
          .replace(/@/g, "@" + String.fromCharCode(8203))
          .replace(client.token, "[ CLASSIFIED TOKEN ]");
      else return text;
    };
    let archivo;
    const emerror = new client.discord.MessageEmbed()
      .setTitle("Jaja argsn´t")
      .setColor(client.config.colors.error);
    if (!args[0]) return message.channel.send({ embeds: [emerror] });
    let t1 = Date.now();
    // Este mensaje saldra primero y se editara cuando termine de hacer el eval
    const edit = new client.discord.MessageEmbed()
      .setTitle("Wait...")
      .setDescription(":stopwatch: Evaluating...")
      .setColor(client.color);
    message.channel.send({ embeds: [edit] }).then(async msg => {
      try {
        if (toEval) {
          let evaled = eval(toEval);

          if (typeof evaled !== "string")
            evaled = await inspect(evaled, { depth: 0 });

          if (clean(evaled).length > 3500) {
            archivo = new client.discord.MessageAttachment(
              Buffer.from(clean(evaled), "utf-8"),
              "evaluated.json"
            );
          }

          const m1 = new client.discord.MessageEmbed()
            .setTitle("Evaluation Executed!")
            .setColor(client.config.colors.success)
            .setDescription(
              `**Input:**\n\`${
                toEval.length > 500
                  ? toEval.slice(0, 500) +
                    " ... and others " +
                    (toEval.length - 500) +
                    " characters."
                  : toEval
              }\`\n**Result:**\n\`\`\`js\n${
                clean(evaled).length > 3500
                  ? clean(evaled).slice(0, 3500) +
                    "\n```\n > ... and others " +
                    (clean(evaled).length - 3500) +
                    " characters."
                  : clean(evaled) + "\n```"
              }`
            )
            .setFooter(((Date.now() - t1) / 1000).toFixed(2) + " seconds");

          msg.edit({
            embeds: [m1],
            files: clean(evaled).length > 3000 ? [archivo] : []
          });
        }
      } catch (error) {
        const m3 = new client.discord.MessageEmbed()
          .setTitle("Evaluation Cancelled!")
          .setColor(client.config.colors.error)
          .setDescription(
            `**Input:**\n \`${toEval}\` \n**Result:**\n\`\`\`xl\n${clean(
              error
            )}\n\`\`\``
          )
          .setAuthor("· Error! ")
          .setFooter(((Date.now() - t1) / 1000).toFixed(2) + " seconds");
        msg.edit({ embeds: [m3] });
      }
    });
  }
};
