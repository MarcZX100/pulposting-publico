const Discord = require("discord.js")

module.exports = {
    name: 'userinfo',
    cooldown: 5,
    aliases: ['ui', 'user-info', 'infouser', 'whois'],
    description: 'Displays info about a user!',
    permissions: [],
    guildOnly: true,
    enabled: true,
    exec: async (client, message, args) => {
let msg = message;
        const flags = {
          DISCORD_EMPLOYEE: '<:staff:775084475042365500>',
          PARTNERED_SERVER_OWNER: '<a:partner_server_owner:920633799694483486>',
          BUGHUNTER_LEVEL_1: '<:bughunter1:775085693159342103>',
          BUGHUNTER_LEVEL_2: '<:bughunter2:775307247575629824>',
          HYPESQUAD_EVENTS: '<a:HypeSquad_events:920634449446731777>',
          HOUSE_BRAVERY: '<a:HypeSquad_Bravery:922040177499713557>',
          HOUSE_BRILLIANCE: '<a:HypeSquad_Brilliance:922038942314950656>',
          HOUSE_BALANCE: '<a:HypeSquad_Balance:922040832624820285>',
          EARLY_SUPPORTER: '<:early_supporter_badge:882946944442433596>',
          TEAM_USER: 'Team User',
	  PREMIUM_USER: '<a:nitro:907172980176584735>',
          SYSTEM: 'System',
          bot: '<:bot:775085793789607997>',
          VERIFIED_BOT: 'Verified bot',
          EARLY_VERIFIED_BOT_DEVELOPER: '<:botdeveloper:775085602341126224>',
          DISCORD_CERTIFIED_MODERATOR: '<:moderator:916251231289217044>',
          uwu: ':heart:',
          serverowner: '<:owner:775297887864225862>',
	  booster: 'Server Booster <:boosting:907185190659584050>'
        };

        let persona = args[0] === "random" ? message.guild.members.cache.random() : message.mentions.members.first() || message.guild.members.cache.find(x => x.id == args[0]) || message.member; //Sino menciono a naadie


        const presenc = {
          online: '<:online:775084660262174732> Online',
          offline: '<:offline:775084782425341993> Offline',
          dnd: '<:nomolestar:775085448681750578> Dnd',
          idle: '<:idle:775085068959612938> Idle'
        };


        let inline = true

        const status = {
          false: "No",
          true: "Yes"
        }
        const spec = {
          "298333637265588225": "Para la mayoria, un Tomy más. Para mi, mi mejor admin.", //timiii
          "553662317280362507": "Para algunos una persona. Para mi, mi primera experiencia con una verdadera chica gamer :pray::pray:" //majitook
        }
        const usuario = message.author
        let colour2 = persona.displayHexColor
        const userFlags = persona.user.flags ? persona.user.flags.toArray() : [];
        if (persona.id == "689106697561702437") userFlags.push("uwu")
        if (persona.id == message.guild.ownerId) userFlags.push("serverowner")
        if (persona.user.bot == true) userFlags.push("bot")
	if (persona.premiumSince) userFlags.push("booster")
        const embed1 = new Discord.MessageEmbed()
          .setColor(client.color)
          .setAuthor(persona.user.username, persona.user.avatarURL())
          .setTitle(`**${persona.user.username}'s Info**`)
          .setThumbnail(persona.user.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))
          .addField("**Badges:**", userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None')
          .addField(`**Username:**`, persona.user.tag, inline)
          .addField("**Nickname:**", persona.nickname ? persona.nickname : "None", inline)
          .addField("**Presence:**", persona.presence ? presenc[persona.presence.status] : presenc["offline"], inline)
          .addField("**Roles of this user:**", persona.roles.cache.size.toString(), inline)
          .addField("**When entered the server?**", message.guild ? `<t:${(persona.joinedTimestamp.toString()).slice(0, -3)}>.\n(<t:${(persona.joinedTimestamp.toString()).slice(0, -3)}:R>)` : "DM Channel")
          .addField("**When was the account created?**", `<t:${(persona.user.createdTimestamp.toString()).slice(0, -3)}>.\n(<t:${(persona.user.createdTimestamp.toString()).slice(0, -3)}:R>)`)
        if (spec[persona.id]) embed1.addField("**Special Acknowledgements**", spec[persona.id])
          .setTimestamp(new Date())

	    
let roles =  persona.roles.cache.sort((a, b) => b.position - a.position).filter((r) => r.name !== '@everyone')
const embed2 = new Discord.MessageEmbed()
  .setTitle(`**${persona.user.tag}'s Roles**`)
  .setColor(client.color)
  .setDescription(`**Total roles: \`${persona.roles.cache.size-1}\`:**\n${roles.map(r => `${r}`).join('\n')}`)
/*	    
let act = persona.user.presence.activities[1] ? persona.user.presence.activities[1] : persona.user.presence.activities[0];
const embed3 = new Discord.MessageEmbed()
embed3.setTitle(act ? act.name : "None")
.setColor(client.color)
.setDescription("Actually beta testing!")
.addField("Details:", act ? act.details: "None")
.addField("State:", act ? act.state : "None")
.addField("Start:", act ? "<t:"+ new Date(act.timestamps.start).getTime()/1000+">" : "None")
.addField("End:", act ? "<t:"+ new Date(act.timestamps.end).getTime()/1000+">" : "None")
.addField("Stream:", act ? act.url : "None")
.addField("Emoji:", act ? act.emoji : "None")
.addField("Type:", act ? act.name: "None")
.setThumbnail(act.assets.largeImageURL())
*/
	    	    
const embed4 = new Discord.MessageEmbed()
.setColor(client.color)
.setAuthor(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))
.setTitle(`${persona.user.tag}\'s profile photo`)
.setDescription(`[128 px](${persona.user.avatarURL({ format: 'png', dynamic: true, size: 128 })})  |  [256 px](${persona.user.avatarURL({ format: 'png', dynamic: true, size: 256 })})  |  [512 px](${persona.user.avatarURL({ format: 'png', dynamic: true, size: 512 })})  |  [1024 px](${persona.user.avatarURL({ format: 'png', dynamic: true, size: 1024 })})  |  **2048 px**`)
.setImage(persona.user.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))

	    
                  message.channel.send({embeds:[embed1]})/*.then(function (message) {
                      
       message.react('◀️').then(() => message.react('▶️'));
       const filter = (reaction, user) => {
	        return ['◀️', '▶️'].includes(reaction.emoji.name) && user.id === msg.author.id;
       };

message.awaitReactions({filter, max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

	if (reaction.emoji.name === '◀️') {
		
			message.edit(embed4);
		} else {
			message.edit(embed2);
		};
	})
	.catch(collected => {
		message.reactions.removeAll()
		});
	}).catch(e => message.channel.send("error " + e))

*/
     }
}
