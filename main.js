const Discord = require('discord.js')
const client = new Discord.Client()
const ping = require('minecraft-server-util')
const Streaming = require("discord-streaming")
const prefix = '!'
const fs = require('fs')
const {blacklist} = require("./data.json")
const roleClaim = require("./events/Rules-Guidelines/role-claim")
const reactionRoles = require("./events/React-for-Roles/reaction-roles")

process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error))

//Bot Token Login
const config = require('./config/token.json')
client.login(config.Discord_Bot.Token)

client.commands = new Discord.Collection();

const commandsFiles =fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandsFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


//Bot Start
client.once('ready', () => {
    console.log('StrikerBotTest is online!')

//Rules-Guidelines
    roleClaim(client)
//React for Roles
    reactionRoles(client)
//Bot Status
function randomStatus() {
    let status = 
    [
    'over the Discord Server', 
    'YouTube', 
    'Twitch', 
    'Tutorials to upgrade myself with more functions.' 
    ]

    let rstatus = Math.floor(Math.random() * status.length);
    
    client.user.setActivity(status[rstatus], {type: "WATCHING"});
  }; setInterval(randomStatus, 20000) // Time in ms. 20000ms = 20 seconds. Min: 20 seconds, to avoid ratelimit.

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
    .setImage('https://media.giphy.com/media/OkJat1YNdoD3W/giphy.gif')
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
    .setAuthor(`${member.user.tag} Has left`, member.user.displayAvatarURL())
    .setColor("BLUE")
    .setThumbnail(member.user.displayAvatarURL())
    .setImage('https://austinpomeroy.files.wordpress.com/2014/11/giphy.gif?w=640')
    .addField('Date Left', member.user.createdAt)
    .setFooter("StrikerBot doing it's job :D")
      channel.send(embed);
  });


//Blacklisted Words System
client.on('message', async message => {
    if (message.author.bot) return;
    {
    let confirm = false;
    var i;
    for (i=0;i < blacklist.length; i++) {
        if (message.content.toLowerCase().includes(blacklist[i].toLowerCase()))
        confirm = true;
    }

    if(confirm) {
        message.delete()
        return message.channel.send("<@103513869984464896>" + ' have been notified and will ban you from the server')
        }
    }
})


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
client.on('messageUpdate', async(oldMessage, newMessage)=>{
    require('./events/guild/messageUpdate')(oldMessage, newMessage)
})


//Start of Deleted Messages Logs
client.on('messageDelete', async(message)=>{
    require('./events/guild/messageDeleted')(message)
})


//Start of User Kicked Logs
client.off('guildMemberRemove', async(member)=>{
    require('./events/guild/guildMemberRemove')(member)
})


//Start of User Banned Logs
client.off('guildBanAdd', async(guild, user)=>{
    require('./events/guild/guildBanAdd')(guild, user)
})


//Start of Roles Added Logs
client.off('messageReactionAdd', async(reaction, user) =>{
    require('./events/guild/messageReactionAdd')(reaction, user)
})

//Start of Roles Removed Logs
client.off('messageReactionRemove', async(reaction, user) =>{
    require('./events/guild/messageReactionRemove')(reaction, user)
})

