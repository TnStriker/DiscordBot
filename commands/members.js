module.exports= {
    name: 'server',
    description: "This display how many people are in the server",
    execute(message, args){
        message.channel.send('Calculating total members.....').then(msg => {
            msg.edit(`**Server:** ${message.guild.name}\n**Total members:** ${message.guild.memberCount}`);
        })
    }
}