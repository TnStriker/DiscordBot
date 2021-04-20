const Discord = require('discord.js')

module.exports = {
  name: "live",
  description: "To announce you are live (**For server owner only**)",

  execute(message, agrs) {

    //Role ID
    if(message.member.roles.cache.has('**')){
    
      const msg = "**@everyone I am LIVE NOW!!**"
      const logo = '**Your Image here**'


      const embed = new Discord.MessageEmbed() 
      .setAuthor('**')
      .setTitle('**')
      .setURL('**')
      .setImage(logo)
      .setTimestamp()
      .setColor('PURPLE')
      .setFooter("**")

      message.channel.send(msg, embed)
      message.delete()
    }
  }
}