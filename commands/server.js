const Discord = require('discord.js')

module.exports= {
    name: 'server',
    description: "This display how many people are in the server",
    execute(message, args){
        ///Image link of Author
        const logo = 'https://static-cdn.jtvnw.net/jtv_user_pictures/04ef79cf-11cb-4294-9c3a-b9ab65a7467c-profile_image-300x300.png'
            
        const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        //Can change the name and url image of the Author here
        .setAuthor('StrikerBot Tester', logo)
        .addField('**Server:**', `${message.guild.name}`)
        .setThumbnail(logo)
        .addField('**Total Members:**', `${message.guild.memberCount}`)
        .setTimestamp()
        .setFooter("StrikerBot doing it's job :D")
        message.channel.send(embed)
    }
}
