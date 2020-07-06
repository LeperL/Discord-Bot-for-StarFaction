
  const Discord = require("discord.js");

const ms = require("ms");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
  message.delete()

  const user = message.mentions.users.first()
 if(!user) return message.channel.send("I appologise sir. I've traveled these vast lands and could not find the one you seek.");

 let botmessage = args.join(" ").slice(22);

message.channel.send("I will deliver this message for you, as quickly as I can.").then(m => m.delete(15000));

  setTimeout(function(){
    let sicon = message.guild.iconURL;
    let msgEmbed = new Discord.RichEmbed()
    .setThumbnail(sicon)
    .setColor(0x62BD67)
    .addField("A messenger approaches", message.mentions.users.first())
    .addField("I have traveled a long way to bring you this message:", botmessage)
    .addField("Regards,", message.author)




    message.channel.send(msgEmbed)

}, 300000);
}


//name this whatever the command name is.
module.exports.help = {
  name: "letter"
}
