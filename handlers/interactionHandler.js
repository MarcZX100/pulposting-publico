const { Collection } = require("discord.js");
const fs = require("fs");
const path = require("path");
const Slash = new Collection()
const modules = fs
  .readdirSync("./interactions")
  .filter(file => fs.statSync(path.join("./interactions", file)).isDirectory());
for (let module of modules) {
  console.info(`Loading slash module: --${module}`);
  let slashFiles = fs
    .readdirSync(path.resolve(`./interactions/${module}`))
    .filter(
      file =>
        !fs.statSync(path.resolve("./interactions/", module, file)).isDirectory()
    )
    .filter(file => file.endsWith(".js"));
  for (let file of slashFiles) {
    console.info(`Loading dev slash command: ${file}`);
    file = require(`../interactions/${module}/${file}`);
    file.module = module;
    console.log(file)
    Slash.set(file.data.name, file);
  }
}
module.exports = client => {
  client.slash = Slash;
};
