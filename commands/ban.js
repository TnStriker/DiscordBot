const Discord = require('discord.js')

module.exports= {
    name: 'ban',
    description: "Bans person from the server (**For mods and server owner only**)",
    execute(message, args) {

        //Role ID(Has to be set to moderators and above or if you have different levels of moderation you can choose the rank that can use it)
        if(!message.member.roles.cache.has('167451506927206400')) return message.channel.send("You are not a mod of the server.");

        let toBan = message.mentions.members.first();
        let reason = args.slice(1).join(" ");

        if(!args[0]) return message.channel.send('Have to mention someone to ban.');
        if(!toBan) return message.channel.send(`${args[0]} is not a member.`);
        if(!reason) return message.channel.send('Specify a reason.');

        if(!toBan.bannable) {
            return message.channel.send(':x: I cannot ban some that is Admin/Mod. :x:');
        }

        if(toBan.bannable){
            let embed = new Discord.MessageEmbed()
            .setTitle('Banned')
            .addFields(
                {name: 'Member Banned:', value: toBan},
                {name: 'Banned By:', value: message.author},
                {name: 'Reason:', value: reason},
                {name: 'Date:', value: message.createdAt},
            )
            .setColor('RED')
            message.channel.send(embed)
            toBan.ban();
        }
    }
}