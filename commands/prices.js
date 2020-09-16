const Discord = require('discord.js')

module.exports= {
    name: 'prices',
    description: "prices of my commissions",
    execute(message, args) {
        
        const logo = 'https://yt3.ggpht.com/a/AATXAJy6XbekbgDLQumtbXeiWfKf2ujkqYrps5cNdpAgNA=s900-c-k-c0xffffffff-no-rj-mo'

        const embed = new Discord.MessageEmbed() 
        .setTitle('Commission Prices')
        .setURL('https://strikerdesigns.carrd.co/')
        .setThumbnail(logo)
        .addFields(
            {name: '*Icon:*', value: '$30(+5 w/BG)\nIf you want to use it for merchandise, you have to pay for **"Logo"** pricing'},
            {name: '*Chibi:*', value: '$50(+10 w/BG)'},
            {name: '*Emote:*', value: '$30 each(3 = $80, 6 = $170)'},
            {name: '*Sub Badge:*', value: '$30 ea/$30 +$3 ea alt'},
            {name: '*Logo:*', value: "$80 - $200(depends on complexity and since it's your **brand**)\n**This also allows you to use it for merchandise.**"},
            {name: '*Streamer Package*', value: '$100 -$400 (this is usually a complete overhaul or either new overlays and panels)'},
            {name: '*Time to complete commission?*', value: 'A commission could take from one week to two weeks to complete. (Depending on complexity). If commissioned to do animated alerts or animated singer it could take two weeks.'},
            )
        .setTimestamp()
        .setColor('PURPLE')
        .setFooter("StrikerBot doing it's job :D")

        message.channel.send(embed)
    }
}