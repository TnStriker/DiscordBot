const Discord = require('discord.js')

module.exports= {
    name: 'twitch',
    description: "Sends link of Twitch Channel",
    execute(message, args) {

        const logo = '**'

        const embed = new Discord.MessageEmbed() 
        .setAuthor('Twitch')
        .setTitle('**')
        .setURL('https://www.twitch.tv/******')
        .setImage(logo)
        .setTimestamp()
        .setColor('PURPLE')
        .setFooter("DIscordBot doing it's job :D")

        message.channel.send(embed)
    }
}