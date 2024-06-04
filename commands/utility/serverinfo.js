const Discord = require("discord.js")

module.exports = {
	name: 'serverinfo',
	cooldown: 5,
	aliases: ['server', 'si'],
	description: 'Displays all info about this server!',
  permissions: [],
	guildOnly: true,
	enabled: true,
  exec: async (client, message, args) => {

    const { mm, author } = message
const menu = new Discord.MessageSelectMenu()
.setCustomId('menu')
.setPlaceholder('Other Options')
.addOptions({
        label: 'Roles',
        emoji: '<:holi:812046565611012137>', 
        description: 'View the role list of the server',
        value: 'option_1'
    },
    {
        label: 'Channels',
        emoji: '<:756795197525983282:854483062439804928>', 
        description: 'View the channel list of the server',
        value: 'option_2'
    },
    {
        label: 'Resume',
        emoji: '<:husk:767089642050027600>',
        description: 'View the general information of the server',
        value: 'option_3'
    }
)
.setMaxValues(1)
 
           let grol = message.guild.roles.cache.sort((a, b) => b.position - a.position)
    
     let radmin = grol
            .map(r => r)
            .filter((r) => r.permissions.has("ADMINISTRATOR"))
            .filter((r) => !r.managed)
     	    .filter((r) => !r.everyone)
             radmin = radmin.length > 23 ? `${radmin.slice(0, 23).join(' | ')} and ${radmin.length - 23} more roles` : radmin.join(' | ');/////Now, with what we filter. If the members with the role are more than 15 it will say how many more members have the role. This to avoid future problems
            if (!radmin) radmin = "There are no administrators";

let rmod = grol
            .map(r => r)
            .filter((r) => r.permissions.has("BAN_MEMBERS"))
            .filter((r) => !r.permissions.has("ADMINISTRATOR"))
     	    .filter((r) => !r.everyone)
            .filter((r) => !r.managed)
             rmod = rmod.length > 23 ? `${rmod.slice(0, 23).join(' | ')} and ${rmod.length - 23} more roles` : rmod.join(' | ');/////Now, with what we filter. If the members with the role are more than 15 it will say how many more members have the role. This to avoid future problems
            if (!rmod) rmod = "There are no moderators";
    
let rmember = grol
            .map(r => r)
            .filter((r) => !r.permissions.has("MANAGE_MESSAGES"))
            .filter((r) => !r.permissions.has("ADMINISTRATOR"))
     	      .filter((r) => r != message.guild.roles.everyone)
            .filter((r) => !r.managed)
             rmember = rmember.length > 23 ? `${rmember.slice(0, 23).join(' | ')} and ${rmember.length - 23} more roles` : rmember.join(' | ');/////Now, with what we filter. If the members with the role are more than 15 it will say how many more members have the role. This to avoid future problems
            if (!rmember) rmember = "There are no members";
    
let rbots = grol
            .map(r => r)
            .filter((r) => r.managed)
     	    .filter((r) => !r.everyone)
            .filter((r) => r != message.guild.roles.premiumSubscriberRole)
             rbots = rbots.length > 23 ? `${rbots.slice(0, 23).join(' | ')} and ${rbots.length - 23} more roles` : rbots.join(' | ');/////Now, with what we filter. If the members with the role are more than 15 it will say how many more members have the role. This to avoid future problems
            if (!rbots) rbots = "There are no bots";
    
let rboost = grol
  .map(r => r)
  .filter((r) => r == message.guild.roles.premiumSubscriberRole)

rboost = rboost.length > 23 ? `${rboost.slice(0, 23).join(' | ')} and ${rboost.length - 23} more roles` : rboost.join(' | ');/////Now, with what we filter. If the members with the role are more than 15 it will say how many more members have the role. This to avoid future problems
            if (!rboost) rboost = "There are no boosters";
    
const embed1 = new Discord.MessageEmbed()
.setTitle("List of the roles of this server")
.setColor(client.color)
.addField("Boosters", rboost)
.addField("Administrators", radmin)
.addField("Moderators", rmod)
.addField("Members", rmember)
.addField("Bots", rbots)

//--------------------------------------------------------------

const lepush = (q, c) => {
      if (c.type == "GUILD_TEXT") {
        c.threads.cache.size > 0
          ? q.push(
              `#️⃣ ${c.name}` +
                "\n" +
                c.threads.cache
                  .map(th => "> <:thread:912627488448974858> " + th.name)
                  .join("\n")
            )
          : q.push(`#️⃣ ${c.name}`);
      } else if (c.type == "GUILD_VOICE") q.push(`🔊 ${c.name}`);
      else if (c.type == "GUILD_NEWS") q.push(`📣 ${c.name}`);
      else if (c.type == "GUILD_STORE") q.push(`🏷️ ${c.name}`);
      else if (c.type == "GUILD_CATEGORY") q.push(`\n> ${c.name}`);
      else if (c.type == "GUILD_STAGE_VOICE") q.push(`<:stage:912248748158103553> ${c.name}`);
      else q.push(`#️⃣ ${c.name}`);
    };

    let categorias = message.guild.channels.cache
      .filter(q => q.type == "GUILD_CATEGORY")
      .sort((p, c) => p.rawPosition - c.rawPosition);
    let canales = [];

    message.guild.channels.cache
      .filter(q => q.type != "GUILD_CATEGORY")
      .filter(q => !q.parentId)
      .sort((p, c) => p.rawPosition - c.rawPosition)
      .forEach(c => lepush(canales, c));
    categorias.forEach(c => {
      lepush(canales, c);
      message.guild.channels.cache
        .filter(q => q.parentId == c.id)
        .sort((p, c) => p.rawPosition - c.rawPosition)
        .forEach(c => lepush(canales, c));
    });

      const embed2 = new Discord.MessageEmbed()
        .setTitle(`Channel list of this server`)
        .setColor(client.color)
        .setDescription((canales.join("\n").slice(0, 2000)).toString())
        .setTimestamp(new Date());
   
//--------------------------------------------------

    let lvlverf = {
         "NONE": "Unrestricted",
         "LOW": "Low Restrictions - You must have a verified mail",
         "MEDIUM": "Medium Restrictions - You must have a Discord account for more than 5 minutes and a verified mail",
         "HIGH": "High Restrictions - You must have a Discord account for more than 5 minutes, a verified mail and been a member of the guild for 10 minutes",
         "VERY_HIGH": "Extreme Restrictions - You must have a Discord account for more than 5 minutes, a verified mail, been a member of the guild for 10 minutes and to have a verified number phone"
     };
     
     const status = {
        false: "No",
        true: "Yes"
      }
     let embed3 = new Discord.MessageEmbed()
      .setColor(client.color)
      .setTitle("Server Info")
      .setThumbnail(message.guild.iconURL())
      .setAuthor(`${message.guild.name}`, message.guild.iconURL())
      .addField("**Guild Owner**", message.guild.members.cache.find(x => x.id == message.guild.ownerId).toString(), true)
      .addField("**Guild ID**", `${message.guild.id}`, true)
      .addField("**Member Count**", `Total |**${message.guild.members.cache.size}**| \nHumans |**${message.guild.members.cache.filter(member => !member.user.bot).size}**| \nBots |**${message.guild.members.cache.filter(member => member.user.bot).size}**|`, true)
   //   .addField("**Region**", `${region[message.guild.region]}`, true)
      .addField("**Channels**", `Text channels: ${message.guild.channels.cache.filter(m => m.type === 'GUILD_TEXT').size}\nVoice channels: ${message.guild.channels.cache.filter(m => m.type === 'GUILD_VOICE').size}\nStage channels: ${message.guild.channels.cache.filter(m => m.type === 'GUILD_STAGE_VOICE').size} \nSelect the channels option at the menu`, true)
      .addField("**Roles**", `${message.guild.roles.cache.size} \n\Select the roles option at the menu`, true)
      .addField("**Verification level**", lvlverf[message.guild.verificationLevel])
      .addField("**Created On**", `<t:${(message.guild.createdTimestamp.toString()).slice(0, -3)}>. (<t:${(message.guild.createdTimestamp.toString()).slice(0, -3)}:R>)`, true)
      .setFooter(new Date().toString());
message.channel.send({ embeds: [embed3],
    components: [{
        "type": 1, 
        "components": [menu]
    }]
}).then(msg => {
  
  
  
  const collector = msg.createMessageComponentCollector({
  filter: ({user}) => user.id === author.id
})
  collector.on('collect', async interaction => {
    
    if(interaction.values[0] === 'option_1') {
     await interaction.update({ embeds: [embed1] })
    }
    if(interaction.values[0] === 'option_2') {
      await interaction.update({ embeds: [embed2] })
    }    
    if(interaction.values[0] === 'option_3') {
      await interaction.update({ embeds: [embed3] })
    }    
  })
  
  
})
    
    
  },
};
