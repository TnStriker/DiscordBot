const {MessageEmbed} = require('discord.js')
module.exports=async(oldMessage,newMessage)=>{

    let embed = new MessageEmbed()
    .setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL)
    .setThumbnail(oldMessage.author.displayAvatarURL())
    .setColor('GREEN')
    .setTitle('A Message has been Edited!')
    .addField('Before:', oldMessage.content,true)
    .addField('After:', newMessage.content, true)
    .setTimestamp()
    .setFooter("StrikerBot doing it's job :D")

    let channel = oldMessage.guild.channels.cache.find(ch => ch.name === "botspam")
    if(!channel) return;
    channel.send(embed)

}