module.exports= {
    name: 'commands',
    description: "This is for commands list",
    execute(message, args) {
        message.channel.send('Bot Commands: !youtube, !twitch, !twitter, !instagram');
    }
}