const Discord = require('discord.js')

module.exports= {
    name: 'commands',
    description: "This is for commands list",
    execute(message, args) {

        const embed = new Discord.MessageEmbed() 
        .addField('**Bot Commands**', '!youtube\n!twitch\n!twitter\n!instagram\n!mod (Moderator cmd ONLY)')
        .setThumbnail('https://64.media.tumblr.com/77f6b7319f1aeb048973be48368b0784/tumblr_ovq5tr4u2M1v6lhveo1_250.png')
        .setTimestamp()
        .setColor('RANDOM')
        .setFooter("StrikerBot doing it's job :D")

        message.channel.send(embed)  
    }
}