const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes


    const user = message.mentions.users.first()
   if(!user) return message.channel.send("I appologise sir. I've traveled these vast lands and could not find the one you seek.");



   let botmessage = args.join(" ").slice(22);

      let sicon = message.guild.iconURL;

      let msgEmbed = new Discord.RichEmbed()
      .setThumbnail(sicon)
      .setColor(0x62BD67)
      .addField("A messenger approaches", message.mentions.users.first())
      .addField("I have traveled a long way to bring you this message:", botmessage)
      .addField("Regards,", message.author)


      message.delete().catch();
      message.channel.send(msgEmbed)


  }
//name this whatever the command name is.
module.exports.help = {
  name: "letter"
}
