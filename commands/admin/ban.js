const Discord = require("discord.js"); //Setea el Discord
 const functions = require("/app/modules/functions.js") //Agarra las funciones

 module.exports = { //Lo exporta a el bot.js con el message.js
   name: "ban", //Nombre de comando
   cooldown: 5, //Tiempo para volver a usar el comando (en segundos)
   aliases: ["banu"], //Aliases para usarlo
   description: "This command bans users! (troll)", //Descripción del comando
   guildOnly: true, //Si solo se puede usar en servidores
   ownerOnly: false, //Si solo lo puedo usar yo
   nsfwOnly: false, //Si solo se puede usar en canales NSFW
   usage: "<user id/user mention>", //Uso del comando (solo args)
   permissions: [], //Permisos necesarios para ejecutar el comando
   botpermissions: [], //Permisos del bot necesarios para ejecutar el comando
   enabled: true, //Si está encendido
   exec: async (client, message, args) => { //Ejecutar con async para el await
 //añadir un huevo de respuestas distintas para el dm de candela cuando se banea a ella misma juju

     if(!args[0]) return message.channel.send("Who do you want me to ban?");
     let user = message.mentions.members.first() || message.guild.members.cache.find(x => x.id == args[0]);//Sino menciono a naadie
     if(!user) return message.channel.send(`I could no find the \`${args[0]}\` user.`);
       if(message.author.id == "689106697561702437" && user.id == "689106697561702437") return message.channel.send("OwO").then(message.author.send(`Soñé que me despertaba a tu lado...`));
     if(user.id == "689106697561702437") return message.channel.send("q").then(message.author.send("Mira amigo yo soy una persona muy pacifica pero como intentes banear a candela media vez más te voy a meter tal puñetazo que no te van a dar ganas de reanimar tu corazón otra vez."));
         if(user.id == "506565592757698600") return message.channel.send("????").then(message.author.send("Amigo te voy a recagar a piñas como banees a potato"));
    if(user.id == "661229020792487947" && message.author.id != "506565592757698600") return message.channel.send("🤨📸").then(message.author.send("אני מחרבן על החתיך המת שלך בן זונה, אני מקווה שאזיין את אחותך בזמן שאני נוגע בציצי של בת דודה שלך בזמן שהיא מבקשת ממני לזיין את הבן שלה מקבוצת זונות שלא רוצה להגיד לך מי מהן היא אמא שלך אבא שלך יודע שהוא הלך על סיגריות ולא חזר כי הפרצוף שלך כל כך הגעיל אותו שאתה נראה כמו תנור עם חתיכת קרטון מהסלע אני הולך לשים מברשת אסלה לתחת שלך ואני הולך להתפתל זה עד שהוא נקרע, אז אני אגרום לך לאכול את החלק הקרוע ושתיהנה ממנו להמשך תוציא את הכבד מתוך רקיק ותאכל אותו עם לחם"));
    message.channel.send(`You have succesfully banned ${user.tag}`)
     user.user.send(`You have been banned from ${message.guild}!`)


   }
 };
