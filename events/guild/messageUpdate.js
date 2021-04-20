const {MessageEmbed} = require('discord.js')
module.exports = async(oldMessage, newMessage)=>{

    let embed = new MessageEmbed()
    .setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL)
    .setThumbnail(oldMessage.author.displayAvatarURL())
    .setColor('GREEN')
    .setTitle('A Message has been Edited!')
    .addField('Before:', `${oldMessage.content}`,true)
    .addField('After:', `${newMessage.content}`,true)
    .setTimestamp(newMessage.createdAt)
    .setFooter("DiscordBot doing it's job :D")
    
    //Channel Name
    let channel = oldMessage.guild.channels.cache.find(ch => ch.name === "**")
    if(!channel) return;
    //if (message.author.bot) return;
    channel.send(embed)
}