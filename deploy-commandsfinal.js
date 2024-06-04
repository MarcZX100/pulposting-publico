const fs = require("fs");
const path = require("path");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { clientId, guildId, token } = require("./config.json");
const commands = [];
//const commandFiles = fs.readdirSync('./interactions').filter(file => file.endsWith('.js'));

const modules = fs
  .readdirSync("./interactions")
  .filter((file) =>
    fs.statSync(path.join("./interactions", file)).isDirectory()
  );
for (let module of modules) {
  let slashFiles = fs
    .readdirSync(path.resolve(`./interactions/${module}`))
    .filter(
      (file) =>
        !fs
          .statSync(path.resolve("./interactions/", module, file))
          .isDirectory()
    )
    .filter((file) => file.endsWith(".js"));
  for (let file of slashFiles) {
    const command = require(`./interactions/${module}/${file}`);
    commands.push(command.data.toJSON());
  }
}

const rest = new REST({ version: "9" }).setToken(process.env.BOT_TOKEN);
//client.api.applications(client.user.id).guilds('guild id').commands.post(client.slash)
console.log(commands);
rest
  .put(Routes.applicationCommands(clientId), { body: commands })

  .catch(console.error);
