const Discord = require('discord.js');
const ping = require("minecraft-server-util")

module.exports= {
    name: 'mc',
    description: "This is a uptime checker",
    execute(message,args){
        ping('nerdherd.apexmc.co', 25565, (error, response) =>{
            if(error){
                message.channel.send('The Server is not Online at the moment!')
            } else {
            
            let embed = new Discord.MessageEmbed()
            .setTitle('Server Status')
            .setColor('BLUE')
            .setThumbnail('https://cdn.discordapp.com/attachments/619118156954468372/723601688925306910/Untitled.png')
            .setImage('https://cdn.discordapp.com/attachments/619118156954468372/724491463454359593/2020-06-21_21.24.06.png')
            .addField('Server IP', response.host)
            .addField('Server Version', response.version)
            .addField('Online Players', response.onlinePlayers)
            .addField('Max Players', response.maxPlayers)
            .setTimestamp()
            .setFooter("StrikerBot doing it's job :D")

            message.channel.send(embed);
            }

        })
    }
}