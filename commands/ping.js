module.exports= {
    name: 'ping',
    description: "This is a ping command!",
    execute(message, args){
        message.channel.send('Calculating ping.....').then(msg => {
            const ping = msg.createdTimestamp - message.createdTimestamp;
            msg.edit(`StrikerBot's ping is ${ping}ms`);
        })
    }
}