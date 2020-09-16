const Discord = require('discord.js')

module.exports = {
  name: "live",
  description: "To announce you are live",

  execute(message, agrs) {

    //Role ID
    if(message.member.roles.cache.has('167451970855108609')){
    
      const msg = "**@everyone I am LIVE NOW!!**"
      const logo = 'https://yt3.ggpht.com/a/AATXAJy6XbekbgDLQumtbXeiWfKf2ujkqYrps5cNdpAgNA=s900-c-k-c0xffffffff-no-rj-mo'


      const embed = new Discord.MessageEmbed() 
      .setAuthor('Twitch')
      .setTitle('TnStrikerGamer')
      .setURL('https://www.twitch.tv/TnStrikerGamer')
      .setImage(logo)
      .setTimestamp()
      .setColor('PURPLE')
      .setFooter("StrikerBot doing it's job :D")

      message.channel.send(msg, embed)
      message.delete()
    }
  }
}