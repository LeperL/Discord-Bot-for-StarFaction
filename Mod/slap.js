
  const Discord = require("discord.js");
const errors = require("../errors.js");
const ms = require("ms");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
  message.delete();
if(!message.member.hasPermission("MUTE_MEMBERS")) return errors.noPerms(message, "MUTE_MEMBERS");
  let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!user) return errors.cantfindUser(message, "Could not find the user.");

      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(user, {
          SEND_MESSAGES: false

        });
      });

  let mutetime = args[1];
  if(!mutetime) return errors.noAmount(message, "Specify the mute time.");

  setTimeout(function(){
    message.guild.channels.forEach(async (channel, id) => {
      await channel.overwritePermissions(user, {
      SEND_MESSAGES: true

    })
    })
    message.channel.send(`${user} has been slapped so hard he got knocked out.`);
}, ms(mutetime));
}


//name this whatever the command name is.
module.exports.help = {
  name: "slap"
}
