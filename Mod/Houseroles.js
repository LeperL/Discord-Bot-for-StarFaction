const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
  if(!message.member.roles.some(r=>["Owner/Administrator", "Moderator", "King"].includes(r.name)) )
    return message.reply("You must be a GOD/GODDESS to use this command, you tiny human.");

const frost = client.emojis.get("608453655594663947");
const jack = client.emojis.get("608453595297349633");

const houseEmbed = {
      "title": "Choose your Kingdom",
      "description": "Here you will choose which Kingdom you want to join, by selecting one of the two icons below. ",

      "fields": [
        {
          "name": "House of Frost Gate",
          "value": "frost",
          "inline": true
        },
        {
          "name": "House of Jackels",
          "value": "jack",
          "inline": true
        }
      ]
    }
      message.channel.send({ embed: houseEmbed });
  }
//name this whatever the command name is.
module.exports.help = {
  name: "houserole"
}
