module.exports= {
    name: 'youtube',
    description: "Sends link of Youtube Channel",
    execute(message, args) {

        if(message.member.roles.cache.has('674369573495111690')){
            message.channel.send('Check out my Youtube Channel! https://www.youtube.com/channel/UCVi5FT5cseYIOvi38PYo4tg')
        
        } else if(message.member.roles.cache.has('167451970855108609')){
                message.channel.send('Check out my Youtube Channel! https://www.youtube.com/channel/UCVi5FT5cseYIOvi38PYo4tg')

        } else if(message.member.roles.cache.has('167451506927206400')){
                message.channel.send('Check out my Youtube Channel! https://www.youtube.com/channel/UCVi5FT5cseYIOvi38PYo4tg')        


        } else {
            message.channel.send('Hey there bud. You do not have the proper permissions to use this command!');
        }
        
        
    }
}