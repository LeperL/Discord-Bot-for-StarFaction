const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes

    if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return message.reply("You must be a GOD to use this command, you tiny human.");


    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");

  let reason = args.slice(1).join(' ');
      if(!reason) reason = "No reason provided";

    let mutedRole = message.guild.roles.find(r => r.name === "Muted")
    if(!mutedRole) return message.channel.send('This user can already speak freely!')

    member.removeRole(mutedRole.id).then(() => {
        message.delete()
    let mutePing = new Discord.RichEmbed()
    .setAuthor(`Unmuted`, message.guild.iconURL)
    .setColor(0x421C52)
    .setDescription(member.user.tag);

    member.send(mutePing)

    let channelmutePing = new Discord.RichEmbed()
    .setAuthor(`Unmuted`, message.guild.iconURL)
    .setColor(0x421C52)
    .setDescription(member.user.tag);

    message.channel.send(channelmutePing)
})

}
//name this whatever the command name is.
module.exports.help = {
  name: "unmute"
}
