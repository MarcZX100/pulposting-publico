const cooldown = {};
const Uses = require("../models/uses.js");
const funcs = require("../modules/functions.js");
const embeds = require("../modules/embeds.js");
let data;
module.exports = async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    const client = interaction.client;
    const command = client.slash.get(interaction.commandName);
    if (!command) return;
    const cname = interaction.commandName;
    client.color = funcs.color(interaction);

    let cmdFile = command.data;

    if (command.nsfwOnly && !interaction.channel.nsfw)
      return embeds.nsfw(interaction, cname);
    
      if (command.ownerOnly && !client.config.owners.includes(interaction.user.id))
    return embeds.owner(interaction, cname);
    
      if (command.permissions && !(client.config.owners.includes(interaction.user.id) ||
      interaction.member.permissions.has(command.permissions || "ADMINISTRATOR") ||
      interaction.user.id === interaction.guild.ownerId
    )
  )
    return embeds.permissions(interaction, command);
    
          if (command.botpermissions && !(interaction.guild.me.permissions.has(command.botpermissions || "ADMINISTRATOR"))
  )
    return embeds.botpermissions(interaction, command);
    
    
    let numuses = 1;
    Uses.findOne(
      {
        command: cname,
      },
      (err, res) => {
        if (err) console.log(err);

        if (!res) {
          const newDoc = new Uses({
            command: cname,
            uses: 0,
          });
          newDoc.save().catch((err) => console.log(err));
        } else {
          res.uses = res.uses + numuses;
          res.save().catch((err) => console.log(err));
        }
      }
    );
    if (command.cooldown) {
      if (!cooldown[interaction.user.id]) cooldown[interaction.user.id] = {};

      let time = cooldown[interaction.user.id][cname] || 0;
      if (time && time > Date.now()) {
        let wait = ((time - Date.now()) / 1000).toFixed(2);
        return embeds.cooldown(interaction, wait, cname);
      }
      cooldown[interaction.user.id][cname] =
        Date.now() + command.cooldown * 1000;
    }

    await command.execute(client, interaction, interaction.user, interaction.guild);
  } catch (error) {
    console.error(error);
    return interaction.reply({
      content: "There was an error while executing this command!",
      ephemeral: true,
    });
  }
};
