const Discord = require("discord.js")

module.exports = {
  name: "channelinfo",
  cooldown: 5,
  aliases: ["ci", "infochannel", "chinfo"],
  description: "Displays info about a channel!", 
  permissions: [],
  usage: "<channel name/channel id/channel mention>",
  guildOnly: true,
  enabled: true,
  exec: async (client, message, args) => {
  
//Definimos discord.

const channel = message.guild.channels.cache.find(x => x.name === args.join(" ")) || message.mentions.channels.first() || message.guild.channels.cache.find(x => x.id == args[0]) || message.channel;		
    
const status = {
        false: "No",
        true: "Yes"
      }
let ctxt = "GUILD_TEXT, DM, GROUP_DM, GUILD_NEWS, GUILD_STORE, GUILD_NEWS_THREAD, GUILD_PUBLIC_THREAD, GUILD_PRIVATE_THREAD";
    
let type = {
    "GUILD_TEXT": "Text Channel",
    "DM": "Direct Message Channel",
    "GUILD_VOICE": "Voice Channel",
    "GROUP_DM": "DM Group",
    "GUILD_CATEGORY": "Category",
    "GUILD_NEWS": "News Channel",
    "GUILD_STORE": "Stored Channel",
    "GUILD_NEWS_THREAD": "New´s Channel Thread",
    "GUILD_PUBLIC_THREAD": "Public Channel Thread",
    "GUILD_PRIVATE_THREAD": "Private Channel Thread",
    "GUILD_STAGE_VOICE": "Stage Voice Channel",
    "UNKNOW": "Unknow Channel"
};
    
    
   // const messages = await channel.messages.fetch({ after: 1, limit: 1 });
		//const fmsg = messages.first();         
    
//Definimos el canal del cual sacaremos informacion. Obteniendo el primer canal mencionado o la primera id.
    
//Definimos el embed que enviaremos
 const cha = new Discord.MessageEmbed()
    
   .setTitle(`:file_folder: **CHANNEL INFORMATION** :file_folder:`)
 
   .addField(`Channel name:`, `\`- ${Discord.Util.escapeMarkdown(channel.name)}\``) 

//Obtenemos el nombre del canal.

    .addField(`Channel ID:`, `\`- ${channel.id}\``, true)

//Se obtiene la id del canal.

    .addField(`Channel type`, `\`- ${type[channel.type]}\``, true)

//Obtenemos el tipo de canal, noticias, texto, voz etc
    
     .addField(`NSFW Channel?`, `\`- ${status[channel.nsfw]}\``)

//Revisamos si el canal es nswf, mediante un boolean (false | true)
 
    .addField(`Channel topic`, `\`- ${channel.topic ? channel.topic : "This channel has no topic or it´s unavailable."}\``)

//Se obtiene el tema del canal, si el contenido es menor a 1 caracter (Se hace esto por que a veces se buguean los temas) retorne a "No hay un tema."
//Si hay un tema, lo envia.
   
    .addField(`Channel parent`, `\`- ${channel.parent ? channel.parent.name : "This channel has not category."}\``)
 
//Obtenemos la categoria en el que esta el canal.

    .addField(`Channel created at`, `- <t:${(channel.createdTimestamp.toString()).slice(0, -3)}>. (<t:${(channel.createdTimestamp.toString()).slice(0, -3)}:R>)`)
    
 	//Obtenemos cuando se envió el primer mensaje
/*if(channel.isText()) {
  cha.addField('First Message', `- [Jump!](${fmsg.url})`)
}
 */
 //Primer mensaje del canal con link
 
    cha.setColor(client.color) //Color(?
    
    message.channel.send({ embeds: [cha] })

    
}}
