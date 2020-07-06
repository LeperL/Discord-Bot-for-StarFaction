const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

  if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
    return message.reply("Sorry, you don't have permissions to use this!");

  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!member)
    return message.reply("Please mention a valid member of this server");
  if(!member.bannable)
    return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

  let reason = args.slice(1).join(' ');
  if(!reason) reason = "No reason provided";

  const banEmbed = new Discord.RichEmbed()
  .setDescription("~Ban~")
  .setColor("#15f153")
  .addField("Banned User", member.user.tag)
  .addField("Banned by", message.author)
  .addField("Channel", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", reason);

  let banchannel = message.guild.channels.find('name', "incidents");
  if(!banchannel) return message.channel.send("Couldn't find incidents channel.");


  await member.ban(reason)
    .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
  message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  banchannel.send(banEmbed)

  return;

}
//name this whatever the command name is.
module.exports.help = {
  name: "ban"
}
