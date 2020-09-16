const Discord = require('discord.js')

module.exports= {
    name: 'twitch',
    description: "Sends link of Twitch Channel",
    execute(message, args) {

        const logo = 'https://yt3.ggpht.com/a/AATXAJy6XbekbgDLQumtbXeiWfKf2ujkqYrps5cNdpAgNA=s900-c-k-c0xffffffff-no-rj-mo'

        const embed = new Discord.MessageEmbed() 
        .setAuthor('Twitch')
        .setTitle('TnStrikerGamer')
        .setURL('https://www.twitch.tv/TnStrikerGamer')
        .setImage(logo)
        .setTimestamp()
        .setColor('PURPLE')
        .setFooter("StrikerBot doing it's job :D")

        message.channel.send(embed)
    }
}