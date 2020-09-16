module.exports= {
    name: 'mod',
    description: "Shows commands that mods can use to moderate the discord server",
    execute(message, args) {

        //Role ID
        if(message.member.roles.cache.has('167451506927206400')){
                message.channel.send(`Only use these commands in <#754978114555215953>. They are for logging purposes.\n!ban, !kick`)        

        } else {
            message.channel.send('Hey there bud. You do not have the permission to use this command! This Command is for Moderators only!');
        }
        
        
    }
}