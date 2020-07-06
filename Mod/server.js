const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {


let sicon = message.guild.iconURL;

  const serverembed = new Discord.RichEmbed()

  .setColor("#12f153")
  .setThumbnail(sicon)
  .addField("Server Name", message.guild.name)
  .addField("Created On", message.guild.createdAt)
  .addField("You Joined", message.member.joinedAt)
  .addField("Total Members", message.guild.memberCount);

  return message.channel.send(serverembed);
}

module.exports.help = {
  name: "server"
}
