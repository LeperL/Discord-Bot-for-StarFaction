const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
   const user = message.mentions.users.first()
  if(!user) return message.channel.send("couldn't find user.");
  let reason = args.join(" ").slice(22);

  const reportEmbed = new Discord.RichEmbed()

  .setDescription("Reports")
  .setColor("#15f153")
  .addField("Reported User", user.tag)
  .addField("Reported by", message.author)
  .addField("Channel", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", reason);

  let reportschannel = message.guild.channels.find('name', "user-reported");
  if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


  message.delete().catch(O_o=>{});
  reportschannel.send(reportEmbed)

  return;

}
//name this whatever the command name is.
module.exports.help = {
  name: "report"
}
