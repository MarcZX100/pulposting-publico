const Discord = require("discord.js"); //Setea el Discord
const functions = require("/app/modules/functions.js") //Agarra las functions
const {MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu} = require('discord.js')

module.exports = { //Lo exporta a el bot.js con el message.js
  name: "emojilist", //Nombre de comando
  cooldown: 1, //Tiempo para volver a usar el comando (en segundos)
  aliases: ["el", "elist", "emojil"], //Aliases para usarlo
  description: "", //Descripción del comando
  guildOnly: true, //Si solo se puede usar en servidores
  ownerOnly: true, //Si solo lo puedo usar yo
  nsfwOnly: false, //Si solo se puede usar en canales NSFW
  usage: "", //Uso del comando (solo args)
  permissions: [], //Permisos necesarios para ejecutar el comando
  botpermissions: [], //Permisos del bot necesarios para ejecutar el comando
  enabled: true, //Si está encendido
  exec: async (client, message, args) => { //Ejecutar con async para el await

    
const backId = 'back'
const forwardId = 'forward'
const backButton = new MessageButton({
  style: 'SECONDARY',
  label: 'Back',
  emoji: '⬅️',
  customId: backId
})
const forwardButton = new MessageButton({
  style: 'SECONDARY',
  label: 'Forward',
  emoji: '➡️',
  customId: forwardId
})

// Put the following code wherever you want to send the embed pages:

const {author, channel} = message
const emojis = [...message.guild.emojis.cache.values()]

/**
 * Creates an embed with guilds starting from an index.
 * @param {number} start The index to start from.
 * @returns {Promise<MessageEmbed>}
 */
const generateEmbed = async start => {
  const current = emojis.slice(start, start + 10)

  // You can of course customise this embed however you want
  return new MessageEmbed({
    title: `Showing emojis ${start + 1}-${start + current.length} out of ${
      emojis.length
    }`,
    fields: await Promise.all(
      current.map(async emoji => ({
        name: emoji.toString()+" - ("+emoji.name+")",
        value: `**ID:** ${emoji.id}\n**URL:** [Click here](${emoji.url} '${emoji.name} emoji')`
      }))
    )
  })
}

// Send the embed with the first 10 guilds
const canFitOnOnePage = emojis.length <= 10
const embedMessage = await channel.send({
  embeds: [await generateEmbed(0)],
  components: canFitOnOnePage
    ? []
    : [new MessageActionRow({components: [forwardButton]})]
})
// Exit if there is only one page of guilds (no need for all of this)
if (canFitOnOnePage) return

// Collect button interactions (when a user clicks a button),
// but only when the button as clicked by the original message author
const collector = embedMessage.createMessageComponentCollector({
  filter: ({user}) => user.id === author.id
})

let currentIndex = 0
collector.on('collect', async interaction => {
  // Increase/decrease index
  interaction.customId === backId ? (currentIndex -= 10) : (currentIndex += 10)
  // Respond to interaction by updating message with new embed
  await interaction.update({
    embeds: [await generateEmbed(currentIndex)],
    components: [
      new MessageActionRow({
        components: [
          // back button if it isn't the start
          ...(currentIndex ? [backButton] : []),
          // forward button if it isn't the end
          ...(currentIndex + 10 < emojis.length ? [forwardButton] : [])
        ]
      })
    ]
  })
})
    
  }
};
