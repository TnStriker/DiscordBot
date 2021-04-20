const Discord = require('discord.js')

module.exports= {
    name: 'youtube',
    description: "Sends link of Youtube Channel",
    execute(message, args) {

        const logo = '**'

        const embed = new Discord.MessageEmbed() 
        .setTitle('**')
        .setURL('**')
        .setThumbnail(logo)
        .addField('**')
        .setTimestamp()
        .setColor('RED')
        .setFooter("DiscordBot doing it's job :D")

        message.channel.send(embed)  
    } 
}