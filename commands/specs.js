const Discord = require('discord.js')

module.exports= {
    name: 'specs',
    description: "Specs of setup",
    execute(message, args) {
        
        //Change the image link to show your setup
        const logo = 'https://yt3.ggpht.com/a/AATXAJy6XbekbgDLQumtbXeiWfKf2ujkqYrps5cNdpAgNA=s900-c-k-c0xffffffff-no-rj-mo'

        const embed = new Discord.MessageEmbed() 
        .setTitle('Gaming Setup:')
        //.setImage(logo)
        .addFields(
            {name: 'PC Hardware:', value: 'Asus GL753VE Laptop'},
            {name: 'Accessories:', value: 'Razer Tartarus v2 Keypad\nRazer Basalisk Ultimate Wireless Mouse w/ Charging Dock'},
            {name: 'Monitors:', value: 'MSI Optix 24C 24 inch 1080p 144hz Freesync'},
            //{name: '', value: ''},
            //{name: '', value: ''},
            //{name: '', value: ''},
            {name: 'Total Cost:', value: '\u200b'}
            )
        .setTimestamp()
        .setColor('PURPLE')
        .setFooter("StrikerBot doing it's job :D")

        message.channel.send(embed)
    }
}