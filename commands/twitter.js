module.exports= {
    name: 'twitter',
    description: "Sends link of Twitter Account",
    execute(message, args) {

        if(message.member.roles.cache.has('674369573495111690')){
            message.channel.send('Check out my Twitter Profile! https://twitter.com/TnStriker')

        } else if(message.member.roles.cache.has('167451970855108609')){
            message.channel.send('Check out my Twitter Profile! https://twitter.com/TnStriker')
        
        } else if(message.member.roles.cache.has('167451506927206400')){
            message.channel.send('Check out my Twitter Profile! https://twitter.com/TnStriker')            


        } else {
            message.channel.send('Hey there bud. You do not have the proper permissions to use this command!');
        }


    }
}