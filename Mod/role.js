const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {


let sicon = message.guild.iconURL;
let role =   Object.values(bot.servers[event.d.guild_id].members)
             .filter(m => m.roles.includes(message.mentions.roles))
             .map(m => m.username + "#" + m.discriminator)


  const serverembed = new Discord.RichEmbed()

  .setColor("#12f153")
  .setThumbnail(sicon)
  .addField("Server Name", message.guild.name)
  .addField("Members", role)

  return message.channel.send(serverembed);
}

module.exports.help = {
  name: "role"
}
