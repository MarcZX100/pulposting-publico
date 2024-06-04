const Discord = require("discord.js")
module.exports = {
	name: 'rolelist',
	cooldown: 5,
	aliases: ['roles', 'rl'],
	description: 'Roles of this guild!', 
  permissions: [],
	guildOnly: true,
	enabled: true,
  exec: async (client, message, args) => {

                var emcolor = [0]
    if (message.guild) emcolor = message.guild.me.displayHexColor
      
    if (!message.guild) emcolor = client.config.colors.general
 
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
    
const embed = new Discord.MessageEmbed()
.setTitle("List of the roles of this server")
.setColor(client.color)
.addField("Boosters", rboost)
.addField("Administrators", radmin)
.addField("Moderators", rmod)
.addField("Members", rmember)
.addField("Bots", rbots)
message.channel.send({embeds:[embed]})

	},
};
