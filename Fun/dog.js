const Discord = require('discord.js')
const superagent = require('superagent')
module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
  let {body} = await superagent
  .get ('https://random.dog/woof.json');

  let dogembed = new Discord.RichEmbed()
  .setColor("#ff9900")
  .setTitle("Doggo :dog:")
  .setImage(body.url);

  message.channel.send(dogembed);
  }
//name this whatever the command name is.
module.exports.help = {
  name: "dog"
}
