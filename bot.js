const { Client, Intents } = require('discord.js');
const Discord = require("discord.js");
const Statcord = require("statcord.js");
const { I18n } = require("locale-parser");
const Mongoose = require("mongoose");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.DIRECT_MESSAGES], partials: ["CHANNEL"]  });
//client.errors = require("./modules/errors");
client.config = require("./config.json");
client.discord = require("discord.js");
client.i18n = new I18n({ defaultLocale: "en" });
Mongoose.connect(client.config.mongo_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const Topgg = require("@top-gg/sdk")

//------ Prueba uptime robot
const express = require("express")
const app = express()
app.use(express.static('public'));

app.get("/", (request, response) => {
  response.sendStatus(200);
});


//--------WEBHOOKS VOTOS IN

/*const wbk = new Topgg.Webhook("Buenas1234")

app.post("/dblwebhook", wbk.listener(vote => {
  // vote will be your vote object, e.g
  console.log(vote.user) // 395526710101278721 < user who voted\

  // You can also throw an error to the listener callback in order to resend the webhook after a few seconds
}))
//app.listen(80)*/

// WEBHOOKS VOTOS EN

 client.statcord = new Statcord.Client({
    client,
    key: "---",
    postCpuStatistics: true, /* Whether to post memory statistics or not, defaults to true */
    postMemStatistics: true, /* Whether to post memory statistics or not, defaults to true */
    postNetworkStatistics: true, /* Whether to post memory statistics or not, defaults to true */
});
/*
client.on("ready", async () => {
    console.log("ready");
 
    // Start auto posting
    client.statcord.autopost();
});
*/

 client.statcord.on("autopost-start", () => {
    // Emitted when statcord autopost starts
    console.log("Started autopost");
});

 client.statcord.on("post", status => {
    // status = false if the post was successful
    // status = "Error message" or status = Error if there was an error
   if (status) console.error(status);
});

const api = new Topgg.Api(client.config.topggtoken)
setInterval(() => {
client.statcord.post();
  api.postStats({
    serverCount: client.guilds.cache.size//,
    //shardId: client.shard.ids[0], // if you're sharding
    //shardCount: client.options.shardCount
  })
}, 1800000) // post every 30 minutes


client.on("messageCreate", message => {
  // Variable que permitirÃÂ¡ recibir mensajes al "dm"
  if (message.channel.type === "DM") {
    if (message.author === message.client.user) return;
    //Embed personalizado que se enviarÃÂ
    const embed = new Discord.MessageEmbed()
    .setColor("#3498db")
    .setAuthor(message.client.user.username)
    .setTitle("Mensaje Directo")
    .setDescription(`Mensaje enviado por ${message.author} (${message.author.tag})`)
    .addField("Mensaje", message.content.toString())
    .setTimestamp(new Date().toString())
    message.client.channels.cache.get("757164659882328074").send({ embeds: [embed] })
    }
    });




process.on('unhandledRejection', error => {
  const util = require('util')
	console.log(util.inspect(error, {showHidden: false, depth: null, colors: true}));
});
/*
client.on("message", message => {
  const potao = client.users.cache.get("506565592757698600");
  const em = new Discord.MessageEmbed();
  if (message.content.toLowerCase().includes("potato")) {
    em.setTitle("Ojo que están hablando de ti");
    em.setDescription(message.content);
    em.addField("Servidor", message.guild);
    em.addField("Usuario", message.author.tag);
    em.addField("Link", message.url);
    em.addField("Channel", message.channel.name);
    em.setColor("WHITE");
    potao.send(em);
  }
});
client.on("message", message => {
  if (message.content.startsWith("😡")) {
    message.react("😡");
    message.channel.send("Jaja ta enojao");
  }
  if (message.guild) {
    if (message.guild.id !== "833793659572453427") {
      if (message.author.id !== "506565592757698600") {
        if (message.content === "que") {
          message.channel.send("so");
        }
        if (
          message.content === "so" &&
          message.author.id === "849006806117908531"
        ) {
          message.channel.send("plapollas es el bot de aghus");
        }
        if (message.content === "papo") {
          message.channel.send(
            '"Papo": Abultamiento que tienen algunos animales entre la barbilla y el cuello. Como vuelvas a decir papo te quedas sin papo'
          );
        }
      }
    }
  }
  if (message.guild) {
    if (message.guild.id === "792958112717471775") {
      if (message.content.toLowerCase().includes("todo mal")) {
        message.react("🤣");
      }
    } //sape world
  }
  if (message.content.startsWith("but")) {
    message.channel.send("Ooooh mis lentes de contactoo");
  }
  if (message.content.startsWith("when")) {
    message.channel.send("El futuro és hoy, oiste viejo?");
  }
  if (message.author.id === "702324169240477768") {
    message.react("🏳️‍🌈");
  }
  if (message.content.includes("506565592757698600")) {
    message.react("788896686415413278"); //Yo
  }
  if (message.content.includes("553662317280362507")) {
    message.react("824391499487117334"); //Majo
  }
  if (message.content.includes("834922506988683265")) {
    message.react("888440135908200519"); //puflita octocursed
  }
  if (message.content.includes("651918523177893889")) {
    message.react("844019030641082368"); //Aghus sape world
  }
  if (message.content.includes("503256712288141332")) {
    message.react("787745185743896576"); //mortix
  }
  if (message.content.includes("696278282408165376")) {
    message.react("789516004186914917"); //Fiorsi
  }
  if (message.content.includes("749183988765163531")) {
    message.react("718599893111013398"); //Gabo
  }
  if (message.content.includes("378012817732796427")) {
    message.react("786201099827806219"); //Billy
  }
  if (message.content.includes("709884115763200061")) {
    message
      .react("771759347856048158") //Otro del Sape World
      .then(message.react("771759344407674910"));
  }
  if (message.content.includes("823764010423812106")) {
    message.react("798474403472998411"); //otrooo del sape world si puta madree
  }
  if (message.content.includes("699431584343785582")) {
    message.react("806694226716917770"); //Isai sape world
  }
  if (message.content.includes("823764010423812106")) {
    message.react("798474403472998411"); //Isai sape world
  }
  if (message.content.includes("755657016462147645")) {
    message.react("804480883561332796"); //Otro santi sape world
  }
  if (message.content.includes("541394374177718276")) {
    message.react("828526660017717258"); //Lou sape world
  }

  if (message.content.includes("316626061612023809")) {
    message.react("827995620832575528"); //Skipi
  }
  if (message.content.includes("288748107443732481")) {
    message.react("859263390928470027"); //7z banana
  }
  if (message.content.includes("755913152129925231")) {
    message.react("798792131543302155"); //Skipi
  }
  if (message.content.includes("600046963211370497")) {
    message.react("828186335046139905"); //Unknown Sape World
  }

  if (message.content.includes("556205854240669698")) {
    message
      .react("😏") //Santi Sape World
      .then(message.react("🍔"));
  }

  if (message.content.includes("750918020582604840")) {
    message.react("826817959472529438"); //guadayp sape world
  }
  if (message.content.includes("837035189527773254")) {
    message.react("817447866564870175"); //Erika
  }
  if (message.content.includes("750904672008667166")) {
    message.react("827965208201789461"); //bebelin
  }
  if (message.content.includes("564665208786649088")) {
    message.react("826760164169220107"); //Blessed
  }
  if (message.content.includes("754001594831470713")) {
    message.react("827967531691409459");
    message.react("826760647046856733"); //hvntznoseque
  }
  if (message.content.includes("752550644283474020")) {
    message.react("826761096689352706"); //Done
  }
  if (message.content.includes("753061926182846475")) {
    message.react("826761316122230825"); //Mia 2 (dou 2)
  }
  if (message.content.includes("potato")) {
    message.react("832310683223195759"); //Yo
  }
  if (message.content.includes("457208351647072286")) {
    message.react("860400498791284796"); //LuisDroide
  }
  if (message.content.includes("740629590090973288")) {
    message.react("860400498791284796"); //Francy
  }

  if (message.content.includes("708717695100780674")) {
    message.channel.send("dOu"); //Kemonito
  }

  if (message.content.includes("753061926182846475")) {
    message.react("824670056038268928"); //Mia
  }

  if (message.content.includes("746197116199632946")) {
    message.channel.send("Calla cagada"); //Un pibe random xD
  }

  if (message.content.includes("587319206911934464")) {
    message.channel.send("gei"); //Kaki
  }
  if (message.content.includes("316363985785978881")) {
    message.react("818764364008914945"); //lukitas
  }

  if (message.content.includes("689106697561702437")) {
    message.react("816938240849477652");
  }
  if (message.content.includes("396839262311546891")) {
    message.react("708662800368533504"); //josux
  }
  if (message.content.includes("569155437279051776")) {
    message.react("786150806528589865");
  }

  if (message.channel.id == 707435459441328158) {
    message.react("786219982496595988"); //amén
  }
  if (message.content.includes("661229020792487947")) {
    message.react("877661913188806697");
  }
  if (message.content.includes("587883856984801296")) {
    message.react("878018612986777651");
  }
});
*/
client.database = Mongoose.connection;
client.database.on("error", err => {
  throw err;
});
client.database.once("open", async () => {
  require("./models");
  require("./handlers/eventHandler")(client);
  require("./handlers/moduleHandler")(client);
  require("./handlers/interactionHandler")(client);
  client.login(process.env.BOT_TOKEN);
});
