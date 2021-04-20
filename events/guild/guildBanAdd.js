const {MessageEmbed} = require('discord.js')
module.exports = async(guild, user)=>{

    let embed = new MessageEmbed()
    .setTitle('User has been BANNED')
    .setColor('BLACK')
    .setThumbnail(user.displayAvatarURL())
    .addField(`User banned from ${guild.name}:`, user.tag)
    .setTimestamp()
    .setFooter("DiscordBot took out the trash! -_-")
    
    //Channel Name
    let channel = member.guild.channels.cache.find(ch => ch.name === "**")
    if(!channel) return;
    channel.send(embed)

}