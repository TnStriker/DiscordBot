const Discord = require('discord.js')

module.exports= {
    name: 'twitter',
    description: "Sends link of Twitter Account",
    execute(message, args) {

        const logo = '**'
    
        const embed = new Discord.MessageEmbed() 
        .setAuthor('Twitter')
        .setTitle('**')
        .setURL('https://www.twitter.com/****')
        .setImage(logo)
        .setTimestamp()
        .setColor('BLUE')
        .setFooter("DiscordBot doing it's job :D")

        message.channel.send(embed)
    }
}