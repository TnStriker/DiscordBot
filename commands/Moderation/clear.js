const Discord = require('discord.js')

module.exports = {
    name: 'clear',
    description: "To clear from 1-100 messages in a single command. (Note has to be no older than 14 days.",
    async execute(message, args) {
        if(!message.member.roles.cache.has('167451506927206400')) return message.channel.send("You are not a mod of the server.");
        
        if(!args[0]) return message.reply("Please enter the amount of messages to be cleared.");
        if(isNaN(args[0])) return message.reply("Please enter an actual number!");

        if(args[0] > 100) return message.reply("You can't delete more than 100 messages at a time!");
        if(args[0] < 1) return message.reply("You must delete at least one message to work!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
        });
    }
}