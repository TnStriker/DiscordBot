const Discord = require('discord.js');
const client = new Discord.Client();
const ping = require('minecraft-server-util')
const Streaming = require("discord-streaming")
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
//Bot Status
function randomStatus() {
    let status = [
    'over the Discord Server', 
    'YouTube', 
    'Twitch', 
    'Tutorials to upgrade myself with more functions.', 
    //(`over ${member.guild.memberCount('736014724348641423')} users!`),
    ]

    let rstatus = Math.floor(Math.random() * status.length);
    
    
    client.user.setActivity(status[rstatus], {type: "WATCHING"});
  }; setInterval(randomStatus, 20000) // Time in ms. 20000ms = 20 seconds. Min: 20 seconds, to avoid ratelimit.
  
  console.log('StrikerBotTest is online!')
})


//Start of Welcome Message
client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(ch => ch.name === 'botspam');
    // If the channel wasn't found on this server it does nothing
    if (!channel) return;
    // Send the message, mentioning the member
    let embed = new Discord.MessageEmbed()
    .setTitle("Welcome to the Server!")
    .setAuthor(`${member.user.tag} Has Joined.`, member.user.displayAvatarURL(),)
    .setColor("BLUE")
    .setThumbnail(member.user.displayAvatarURL())
    .addField('Date Joined', member.user.createdAt)
    .addField('Total Members', member.guild.memberCount, true)
    .setFooter("StrikerBot doing it's job :D")
      channel.send(embed);
  });


//Start of Goodbye Message
client.on('guildMemberRemove', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(ch => ch.name === 'botspam');
    // If the channel wasn't found on this server it does nothing
    if (!channel) return;
    // Send the message, mentioning the member
    let embed = new Discord.MessageEmbed()
    .setTitle("Left Server")
    .setAuthor(`${member.user.tag} Has left`, member.user.displayAvatarURL(),)
    .setColor("BLUE")
    .setThumbnail(member.user.displayAvatarURL())
    .addField('Date Left', member.user.createdAt)
    .setFooter("StrikerBot doing it's job :D")
      channel.send(embed);
  });


//Start of Commands
client.on('message', message =>{
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


//Start of Roles Added/Removed Logs

