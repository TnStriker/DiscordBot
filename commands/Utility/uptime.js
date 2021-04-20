const Discord = require('discord.js')

module.exports= {
    name: 'uptime',
    description: "This is a uptime checker",
    execute(message){

        //Role ID(recommeneded to set to only the moderators or person running the bot)
        if(message.member.roles.cache.has('**')){

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
            .setAuthor('DiscordBot Tester', '**')
            .addField('**Current Uptime**', `${uptime}`)
            .setTimestamp()
            .setFooter("Discord doing it's job :D")

            message.channel.send(uptimeembed)
        }
    }
}