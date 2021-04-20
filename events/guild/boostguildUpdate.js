const Discord = require('discord.js')
module.exports = async(client, oldMember, newMember)=>{
    //Boost
    if (!oldMember.premiumSince && newMember.premiumSince) {
        return client.guild.channels.cache.find(ch => ch.name === "general").send(`**${newMember.user.tag}** just boosted the server! Thank you for the Discord Boost!!!`)
    }
    
}