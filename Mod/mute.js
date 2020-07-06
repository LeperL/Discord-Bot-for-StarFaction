const Discord = require('discord.js')
const Mutereport = require("../models/mutereport.js");
const mongoose = require("mongoose");

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
    mongoose.connect('mongodb://localhost/Infractions', { useNewUrlParser: true });


    if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return message.reply("You must be a GOD to use this command, you tiny human.");


    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");

      if(member.roles.some(r=>["Muted"].includes(r.name)) )
        return message.reply("This member is already muted. You idiot.");

  let reason = args.slice(1).join(' ');
      if(!reason) reason = "No reason provided";

    let mutedRole = message.guild.roles.find(r => r.name === "Muted")

    member.addRole(mutedRole.id).then(() => {
    message.delete()
    let mutePing = new Discord.RichEmbed()
    .setAuthor(`Muted`, message.guild.iconURL)
    .setColor(0x421C52)
    .addField("Reason", reason)
    .setDescription(member.user.tag);

    member.send(mutePing)

    let channelmutePing = new Discord.RichEmbed()
    .setAuthor(`Muted`, message.guild.iconURL)
    .setColor(0x421C52)
    .addField("Reason", reason)
    .setDescription(member.user.tag);

    message.channel.send(channelmutePing)



    const mutereport = new Mutereport({
      _id: mongoose.Types.ObjectId(),
      infraction: "Mute",
      username: member.user.username,
      userID: member.Id,
      reason: reason,
      rUsername: message.author.username,
      rID: message.author.id,
      time: message.ceatedAt
});

    mutereport.save()
.then(result => console.log(result))
.catch(err => console.log(err));

message.reply("Infraction saved to database");


})

}
//name this whatever the command name is.
module.exports.help = {
  name: "mute"
}
