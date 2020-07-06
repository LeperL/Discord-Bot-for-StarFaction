const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

  if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
    return message.reply("You must be a GOD/GODDESS to use this command, you tiny human.");


  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!member)
    return message.reply("Please mention a valid member of this server");
  if(!member.kickable)
    return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");


  let reason = args.slice(1).join(' ');
  if(!reason) reason = "No reason provided";

  const kickEmbed = new Discord.RichEmbed()
  .setDescription("~Kick~")
  .setColor("#15f153")
  .addField("Kicked User", member.user.tag)
  .addField("Kicked by", message.author)
  .addField("Channel", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", reason);

  let kickchannel = message.guild.channels.find('name', "incidents");
  if(!kickchannel) return message.channel.send("Couldn't find incidents channel.");


  await member.kick(reason)
    .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
       message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
  kickchannel.send(kickEmbed)

  return;

}
//name this whatever the command name is.
module.exports.help = {
  name: "kick"
}
