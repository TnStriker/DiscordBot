const Discord = require('discord.js')

module.exports= {
    name: 'uptime',
    description: "This is a uptime checker",
    execute(message){

        //Role ID(recommeneded to set to only the moderators or person running the bot)
        if(message.member.roles.cache.has('167451970855108609')){

            let uptime = ``;
            let totalseconds = (message.client.uptime / 1000)
            let week = Math.floor(totalseconds / 604800)
            totalseconds %= 604800
            let days = Math.floor(totalseconds / 86400)
            totalseconds %= 86400
            let hours = Math.floor(totalseconds / 3600)
            totalseconds %= 3600
            let minutes = Math.floor(totalseconds / 60)
            let seconds = Math.floor(totalseconds % 60)

            if (hours > 23) {
            days = days + 1
            hours = 0
            }

            if (week > 0) {
            uptime += `${week} week,`
            }

            if (minutes > 60) {
            minutes = 0;
            }

            uptime += `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`

            let uptimeembed = new Discord.MessageEmbed()
            .setColor('BLUE')
            //Can change the name and url image of the Author here
            .setAuthor('StrikerBot Tester', 'https://static-cdn.jtvnw.net/jtv_user_pictures/04ef79cf-11cb-4294-9c3a-b9ab65a7467c-profile_image-300x300.png')
            .addField('**Current Uptime**', `${uptime}`)
            .setTimestamp()
            .setFooter("StrikerBot doing it's job :D")

            message.channel.send(uptimeembed)
        }
    }
}