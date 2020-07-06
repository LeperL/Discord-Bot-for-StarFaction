const Discord = require("discord.js")
const config = require("./config.json")
const bot = new Discord.Client();
const fs = require("fs");
const path = require("path")


bot.aliases = new Discord.Collection();
bot.commands = new Discord.Collection();
const modules = ['Mod'];

modules.forEach(c => {
fs.readdir(`./commands/${c}/`, (err, files) => {
if (err) throw err;
console.log(`[Commandlogs] Loaded ${files.length} commands of module ${c}`);

files.forEach(f => {
const props = require(`./commands/${c}/${f}`);
bot.commands.set(props.help.name, props);

});
});
});



bot.on("ready", async () => {
    console.log(bot.user.username + " is online.")
  bot.user.setActivity("Conan Exiles", {type: "Playing"});



})



bot.on("message", async message => {
  //a little bit of data parsing/general checks
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  let content = message.content.split(" ");
  let command = content[0];
  let args = content.slice(1);
  let prefix = config.prefix;
  if(message.content.indexOf(config.prefix) !== 0) return;
  let commandfile = bot.commands.get(command.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
})


bot.login(config.token)
