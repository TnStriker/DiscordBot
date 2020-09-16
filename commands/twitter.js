const Discord = require('discord.js')

module.exports= {
    name: 'twitter',
    description: "Sends link of Twitter Account",
    execute(message, args) {

        const logo = 'https://pbs.twimg.com/profile_images/1017974774994227200/fSLG1_Jx_400x400.jpg'
    
        const embed = new Discord.MessageEmbed() 
        .setAuthor('Twitter')
        .setTitle('TnStriker')
        .setURL('https://www.twitter.com/TnStriker')
        .setImage(logo)
        .setTimestamp()
        .setColor('BLUE')
        .setFooter("StrikerBot doing it's job :D")

        message.channel.send(embed)
    }
}