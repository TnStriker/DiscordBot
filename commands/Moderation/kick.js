const Discord = require('discord.js')

module.exports= {
    name: 'kick',
    aliases: ['kick'],
    description: "Kicks person from the server (**For mods and server owner only**)",
    execute(message, args) {

        //Role ID(Has to be set to moderators and above or if you have different levels of moderation you can choose the rank that can use it)
        if(!message.member.roles.cache.has('**')) return message.channel.send("You are not a mod of the server.");

        let toKick = message.mentions.members.first();
        let reason = args.slice(1).join(" ");

        if(!args[0]) return message.channel.send('Have to mention someone to kick.');
        if(!toKick) return message.channel.send(`${args[0]} is not a member.`);
        if(!reason) return message.channel.send('Specify a reason.');

        if(!toKick.kickable) {
            return message.channel.send(':x: I cannot kick some that is Admin/Mod. :x:');
        }

        if(toKick.kickable){
            let embed = new Discord.MessageEmbed()
            .setTitle('Kicked')
            .addFields(
                {name: 'Member Kicked:', value: toKick},
                {name: 'Kicked By:', value: message.author},
                {name: 'Reason:', value: reason},
                {name: 'Date:', value: message.createdAt},
            )
            .setColor('RED')
            message.channel.send(embed)
            toKick.kick();
        }
    }
}