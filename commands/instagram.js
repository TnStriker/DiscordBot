const Discord = require('discord.js')

module.exports= {
    name: 'instagram',
    description: "Sends link of Instagram Account",
    execute(message, args) {

        const logo = 'https://cdn.discordapp.com/attachments/674365739918163968/752702126903525436/tnstriker2-chibi.png'

        const embed = new Discord.MessageEmbed() 
        .setAuthor('Instagram')
        .setTitle('TnStriker')
        .setURL('https://www.instagram.com/_TnStriker_')
        .setImage(logo)
        .setTimestamp()
        .setColor('ORANGE')
        .setFooter("StrikerBot doing it's job :D")
        
        message.channel.send(embed)
    }
}