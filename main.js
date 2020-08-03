const Discord = require('discord.js');
const client = new Discord.Client();
const ping = require('minecraft-server-util')
const prefix = '!';
const fs = require('fs');

process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));  


//Bot Token Login
const config = require('./config/token.json')
client.login(config.Discord_Bot.Token);

client.commands = new Discord.Collection();

const commandsFiles =fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandsFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


//Bot Start
client.once('ready', () => {
    console.log('StrikerBotTest is online!');

});


//Start of Welcome Message
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome-channel');
    if (!channel) return;
    channel.send(`Welcome to the Striker Nation Discord Server, ${member}, please read the RULES in the ${member.guild.channels.cache.get('459232358390956043')}!`);
});


//Start of Goodbye Message
client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome-channel');
    if (!channel) return;
    channel.send(`Goodbye, ${member}, see you next time :(.`);
});


//Start of Commands
client.on('message' ,message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
	    client.commands.get(command).execute(message, args);
    } catch (error) {
	    console.error(error);
	    message.reply('there was an error trying to execute that command!');
    }

});


//Start of Edited Messages Logs
client.on('messageUpdate' ,async(oldMessage, newMessage)=>{
    require('./events/guild/messageUpdate')(oldMessage,newMessage)
})


//Start of Deleted Messages Logs
client.on('messageDelete' ,async(message)=>{
    require('./events/guild/messageDeleted')(message)
})





