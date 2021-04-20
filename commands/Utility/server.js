const Discord = require('discord.js')

module.exports= {
    name: 'server',
    description: "This display how many people are in the server",
    execute(message, args){
        ///Image link of Author
        const logo = '**Your Logo img link HERE**'
            
        const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        //Can change the name and url image of the Author here
        .setAuthor('DiscordBot', logo)
        .addField('**Server:**', `${message.guild.name}`)
        .setThumbnail(logo)
        .addField('**Total Members:**', `${message.guild.memberCount}`)
        .setTimestamp()
        .setFooter("DiscordrBot doing it's job :D")
        message.channel.send(embed)
    }
}
