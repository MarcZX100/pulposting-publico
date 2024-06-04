const Discord = require("discord.js");
const functions = require("/app/modules/functions.js"); //Agarra las functions
const { inspect } = require("util");

let candela = 50;
let potato = 50;

module.exports = {
  name: "eval2",
  aliases: ["e2"],
  description: "Eval command 2",
  permissions: [],
  guildOnly: false,
  cooldown: 0,
  ownerOnly: true,
  nsfwOnly: false,
  enabled: true,
  exec: async (client, message, args) => {

            let code = args.join(" ").trim()
            const originalCode = code
            if(!code) return message.channel.send("Please specify something to Evaluate")
            try{
                if (originalCode.includes("--str")) code = `${code.replace("--str", "").trim()}.toString()`
                if (originalCode.includes("--send")) code = `message.channel.send(${code.replace("--send", "").trim()})`
                if (originalCode.includes("--async")) code = `(async () => {${code.replace("--async", "").trim()}})()`
                code = code.replace("--silent", "").trim()
                code = await eval(code)
                code = inspect(code, { depth: 0 })
                if (String(code).length > 1990) code = "Output is too long"
                if (String(code).includes(client.token)) code = "This message contained client's token."
                if (originalCode.includes("--silent")) return;
                else message.reply({
                    content:`\`\`\`js\n${code}\n\`\`\``,
                    allowedMentions: {
                        repliedUser: false
                    }
                })
            } catch (error){
                console.log(error)
                message.channel.send({
                    content:`\`\`\`js\n${error}\n\`\`\``
                })
            }
  }
};
