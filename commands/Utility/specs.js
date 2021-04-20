const Discord = require('discord.js')

module.exports= {
    name: 'specs',
    description: "Specs of setup",
    execute(message, args) {
        
        //Change the image link to show your setup
        const logo = '**Img link HERE**'

        const embed = new Discord.MessageEmbed() 
        .setTitle('Gaming Setup:')
        //.setImage(logo)
        .addFields(
            {name: 'PC Hardware:', value: '**'},
            {name: 'Accessories:', value: '**'},
            {name: 'Monitors:', value: '**'},
            //{name: '', value: ''},
            //{name: '', value: ''},
            //{name: '', value: ''},
            {name: 'Total Cost:', value: '\u200b'}
            )
        .setTimestamp()
        .setColor('PURPLE')
        .setFooter("DiscordBot doing it's job :D")

        message.channel.send(embed)
    }
}