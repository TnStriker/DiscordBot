const {MessageEmbed} = require('discord.js')
module.exports = async(member)=>{
    
    let embed = new MessageEmbed()
    .setTitle('User has been KICKED!')
    .setColor('GRAY')
    .setThumbnail(member.user.displayAvatarURL())
    .addField('User Kicked:', member.user.tag)
    .setTimestamp()
    .setFooter("DiscordBot took out the trash! -_-")

    //Channel Name
    let channel = member.guild.channels.cache.find(ch => ch.name === "**")
    if(!channel) return;
    channel.send(embed)

}