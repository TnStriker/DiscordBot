const {MessageEmbed} = require("discord.js");
module.exports = {
  name: 'announce',
  description: "Allows Server Owner or Mods to announce something important to specific channel",
  usage: "<channel id> <msg>",
execute(bot, message, args) {
    let rChannel = message.guild.channels.cache.get(args[0]);
    if (!rChannel)
      return 
      message.channel.send("Need to specify the channel you want to send the announcement in!");
    console.log(rChannel);

    let MSG = message.content.split(`${bot.prefix}announce ${rChannel.id} `).join("");
    if (!MSG)
      return
      message.channel.send("You did not specify your message to announce!");
      
    const _ = new MessageEmbed()
    .setTitle("New Announcement!")
    .setDescription(`${MSG}`)
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter("StrikerBot doing it's job :D");
    rChannel.send(_);
    message.delete();
  },
};