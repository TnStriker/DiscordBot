module.exports= {
    name: 'help',
    description: "Shows commands that mods can use to moderate the discord server",
    execute(message, args) {

        if(message.member.roles.cache.has('167451506927206400')){
                message.channel.send('!ban, !kick')        


        } else {
            message.channel.send('Hey there bud. You do not have the permission to use this command! This Command is for Moderators only!');
        }
        
        
    }
}