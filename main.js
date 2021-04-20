const Discord = require('discord.js')
const client = new Discord.Client()
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

//Command Handler
client.commands = new Discord.Collection();
const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

//Bot Start
client.once('ready', () => {
    console.log('DiscordBot is online!')
    console.log(fs.readFileSync('bigtitle.txt').toString())
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
    'Tutorials to upgrade myself with more functions.',
    'Type !help to see the commands!'
    ]

    let rstatus = Math.floor(Math.random() * status.length);
    
    client.user.setActivity(status[rstatus], {type: "WATCHING"});
  }; setInterval(randomStatus, 20000) // Time in ms. 20000ms = 20 seconds. Min: 20 seconds, to avoid ratelimit.

})


//Start of Welcome Message
client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome-channel');
    // If the channel wasn't found on this server it does nothing
    if (!channel) return;
    // Send the message, mentioning the member

    //you can change gif img's here
    let gifs = [
        "https://media.giphy.com/media/OkJat1YNdoD3W/giphy.gif",
        "https://media.giphy.com/media/cIIlbjoKoXCo6K2jrp/giphy.gif",
        "https://media.giphy.com/media/Nx0rz3jtxtEre/giphy.gif",
        "https://media1.tenor.com/images/7446f34a377c958e00783b55c84ae29a/tenor.gif?itemid=3578889"
    ];

    let pick = gifs[Math.floor(Math.random() * gifs.length)];
    
    let embed = new Discord.MessageEmbed()
    .setTitle("Welcome to the Server!")
    .setAuthor(`${member.user.tag} Has Joined.`, member.user.displayAvatarURL(),)
    .setColor("BLUE")
    .setThumbnail(member.user.displayAvatarURL())
    .setImage(pick)
    .addField('Date Joined', member.user.createdAt)
    .addField('Total Members', member.guild.memberCount, true)
    .setFooter("DiscordBot doing it's job :D")
      channel.send(embed);
  });


//Start of Goodbye Message
client.on('guildMemberRemove', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(ch => ch.name === 'bot-logs');
    // If the channel wasn't found on this server it does nothing
    if (!channel) return;
    // Send the message, mentioning the member
    let embed = new Discord.MessageEmbed()
    .setTitle("Left Server")
    .setAuthor(`${member.user.tag} Has left`, member.user.displayAvatarURL())
    .setColor("BLUE")
    .setThumbnail(member.user.displayAvatarURL())
    .addField('Date Left', member.user.createdAt)
    .setFooter("DiscordBot doing it's job :D")
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
        return message.channel.send("<@103513869984464896>" + ' has been notified and will ban you from the server')
        }
    }
})


//Start of Commands
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    
    if (!command) return;

    try {
	    command.execute(message, args, commandName, client);

    } catch (error) {
	    console.error(error);
	    message.reply('there was an error trying to execute that command!');
    }

});


//Start of Edited Messages Logs
client.on('messageUpdate', async(oldMessage, newMessage)=>{
    require('./events/guild/messageUpdate')(oldMessage, newMessage)
});


//Start of Deleted Messages Logs
client.on('messageDelete', async(message)=>{
    require('./events/guild/messageDeleted')(message)
});

//Start of Boost Guild Logs
client.on('boostguildUpdate', async(client, oldMember, newMember)=>{
    require('./events/guild/boostguildUpdate')(client, oldMember, newMember)
})
