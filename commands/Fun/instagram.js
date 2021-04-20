const Discord = require('discord.js')

module.exports= {
    name: 'instagram',
    description: "Sends link of Instagram Account",
    execute(message, args) {

        const logo = '**'

        const embed = new Discord.MessageEmbed() 
        .setAuthor('Instagram')
        .setTitle('**')
        .setURL('https://www.instagram.com/*****')
        .setImage(logo)
        .setTimestamp()
        .setColor('ORANGE')
        .setFooter("DiscordBot doing it's job :D")
        
        message.channel.send(embed)
    }
}