const Discord = require('discord.js');

module.exports = {
    name: "poke",
    description: "Hugging a person.",

    async execute(message, args){

        let gifs = [
            "https://media.discordyui.net/reactions/poke/LI6Lyg3.gif",
            "https://media1.tenor.com/images/a0b5ebc91632f17fc2753228283998c1/tenor.gif",
            "https://media1.giphy.com/media/FdinyvXRa8zekBkcdK/giphy.gif",
            "https://media0.giphy.com/media/LXTQN2kRbaqAw/giphy.gif?cid=ecf05e47r3d1n1ic3yk7848w7afnpwnznenb6ex24x8n9qpt&rid=giphy.gif",
            "https://media4.giphy.com/media/pWd3gD577gOqs/giphy.gif?cid=ecf05e47r3d1n1ic3yk7848w7afnpwnznenb6ex24x8n9qpt&rid=giphy.gif",
            "https://media4.giphy.com/media/aZSMD7CpgU4Za/giphy.gif?cid=ecf05e475b57cadb73fbea51810c0e4f119de46fd24b9572&rid=giphy.gif",
            //"",
            //"",
            //"",
            //"",
            //"",
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];
        let user = message.mentions.members.first();
    
        let embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username}`)
        .addFields(
            {name: 'Pokes:', value: user}

        )
        .setColor('PURPLE')
        .setImage(pick)
    
        message.channel.send(embed)
    
    }
}