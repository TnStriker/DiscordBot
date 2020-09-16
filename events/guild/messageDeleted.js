const {MessageEmbed} = require('discord.js')
module.exports = async(message)=>{
   
    let embed = new MessageEmbed()
    .setTitle('A Message has been Deleted!')
    .setColor('RED')
    .setThumbnail(message.author.displayAvatarURL())
    .addField('Deleted By:', `${message.author.tag}`)
    .addField('Deleted Message:', `${message.content}`,true)
    .addField('Deleted in:', `${message.channel}`)
    .addField('Deleted at:', `${message.createdAt}`)
    .setFooter("StrikerBot doing it's job :D")

    //Channel Name
    let channel = message.guild.channels.cache.find(ch => ch.name === "botspam")
    if(!channel) return;
    if (message.author.bot) return;
    channel.send(embed)
    
}