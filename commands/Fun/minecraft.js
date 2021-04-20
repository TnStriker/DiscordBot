const Discord = require('discord.js');
const ping = require("minecraft-server-util")

module.exports= {
    name: 'mc',
    description: "This is a uptime checker",
    aliases: ['minecraft', 'mc server', 'mcserver'],
    execute(message,args){
        ping('**IP HERE**', **PORT # HERE**, (error, response) =>{
            if(error){
                message.channel.send("The Server is not Online at the moment! It's either being updated or the API isn't working at the moment!")
            } else {
            
            let embed = new Discord.MessageEmbed()
            .setTitle('Server Status')
            .setColor('BLUE')
            .setThumbnail('**Thumbnail img link HERE**')
            .setImage('**Img link HERE**')
            .addField('Server IP', response.host)
            .addField('Server Version', response.version)
            .addField('Online Players', response.onlinePlayers)
            .addField('Max Players', response.maxPlayers)
            .setTimestamp(message.createdAt)
            .setFooter("**")

            message.channel.send(embed);
            }

        })
    }
}