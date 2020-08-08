module.exports = {
    name: "8ball",
    description: "Answers your questions.",
    excute(message) {
        const Discord = require('discord.js');
        let args = message.content.split(" ").slice(0);
        let response = args.slice(1).join(" ");

        if(!question) return message.reply('You to specify a question!');
        else {
            let answers = [
                'Yes!',
                'No',
                'Maybe',
                "I wouldn't answer that...",
                "How would I know!? I'm just a bot!",
                "I don't have knowledge about that..... :/ "
            ]
            let response = answers[Math.floor(Math.random() * answers.length)];

            let embed = new Discord.MessageEmbed()
                .setTitle(':8ball: 8ball!')
                .setThumbnail(author.displayAvatarURL())
                .setColor('RANDOM')
                .addField('Question:', question)
                .addField('Answer:', response)
                .setTimestamp()
                .setFooter("StrikerBot doing it's job :D");
            channel.send(embed);

        }
    }
}