const Discord = require('discord.js')

module.exports= {
    name: 'youtube',
    description: "Sends link of Youtube Channel",
    execute(message, args) {

        const logo = 'https://yt3.ggpht.com/a/AATXAJy6XbekbgDLQumtbXeiWfKf2ujkqYrps5cNdpAgNA=s900-c-k-c0xffffffff-no-rj-mo'

        const embed = new Discord.MessageEmbed() 
        .setTitle('TnStrikerGamer')
        .setURL('https://www.youtube.com/channel/UCVi5FT5cseYIOvi38PYo4tg')
        .setThumbnail(logo)
        .addField('Hey YouTube, TnStrikerGamer here. I upload all kinds of content here, so make sure to check it out and suggest games for me to do!', "Don't forget to subcribe!")
        .setTimestamp()
        .setColor('RED')
        .setFooter("StrikerBot doing it's job :D")

        message.channel.send(embed)  
    } 
}