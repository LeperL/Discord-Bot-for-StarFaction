const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes


 let botmessage = args.join(" ").slice(0);


      message.delete().catch();
      message.channel.send(botmessage);

  }
//name this whatever the command name is.
module.exports.help = {
  name: "say"
}
