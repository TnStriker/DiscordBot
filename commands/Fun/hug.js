const Discord = require('discord.js');

module.exports = {
    name: "hug",
    description: "Hugging a person.",

    async execute(message, args){
//You can add more gifs here
        let gifs = [
            "https://media1.tenor.com/images/6db54c4d6dad5f1f2863d878cfb2d8df/tenor.gif?itemid=7324587",
            "https://acegif.com/wp-content/uploads/anime-hug.gif",
            "https://i.pinimg.com/originals/85/72/a1/8572a1d1ebaa45fae290e6760b59caac.gif",
            "https://res.cloudinary.com/practicaldev/image/fetch/s--TW10EbNL--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.pinimg.com/originals/7f/76/10/7f76102bedf6de4e34065709d16a9ef8.gif",
            "https://res.cloudinary.com/practicaldev/image/fetch/s--TW10EbNL--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.pinimg.com/originals/7f/76/10/7f76102bedf6de4e34065709d16a9ef8.gif",
            "https://media1.tenor.com/images/b0de026a12e20137a654b5e2e65e2aed/tenor.gif?itemid=7552093",
            "https://i.imgur.com/r9aU2xv.gif",
            "https://i.imgur.com/cyyH17s.gif",
            "https://i.imgur.com/LPftvE0.gif",
            "https://i.imgur.com/hpddahS.gif",
            "https://media.discordyui.net/reactions/hug/S5rnKCF.gif",
            "https://cdn.weeb.sh/images/ryg2dd7wW.gif"
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];
        let user = message.mentions.members.first();
    
        let embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username}`)
        .addFields(
            {name: 'Hugs:', value: user}

        )
        .setColor('PURPLE')
        .setImage(pick)
    
        message.channel.send(embed)
    
    }
}