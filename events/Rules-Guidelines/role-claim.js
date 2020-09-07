const firstMessage = require('./first-message')
const Discord = require('discord.js')

module.exports = (client) => {
  const channelId = '751322220604817440'

  const getEmoji = (emojiName) =>
    client.emojis.cache.find((emoji) => emoji.name === emojiName)

  const emojis = {
    plusultra: 'Regular',
  }

  const reactions = []

  let emojiText = '**Welcome to the Striker Nation Community!**\n\n**Rules:**\n• Harassment will not be tolerated.\n• Be respectful.\n• Stay on topic with the channels & their descriptions.\n• Do not spam (that goes for emotes as well).\n• No NSFW Content.\n• Offensive names will be changed (Too sexual, racist, uncomfortable, etc.).\n• Uploading ban worthy images (NSFW, racist, art theft, etc.) will result in a ban.\n• Staff have final say in a matter.\n• Impersonation of staff will result in a ban.\n\n**If you agree to the rules above click the emoji to gain access to the server.**\n\nDM any staff member online (MOD) if you need help (Not the Admin). We are here to help maintain the welcoming attitude of the discord.'
  for (const key in emojis) {
    const emoji = getEmoji(key)
    reactions.push(emoji)

    const role = emojis[key]
    emojiText += `${emoji} = ${role}\n`
  }

  
  const embed = new Discord.MessageEmbed() 
  .setTitle('**Welcome to the Striker Nation Community!**')
  //.setThumbnail('')
  .setImage('https://static-cdn.jtvnw.net/jtv_user_pictures/2b2531cc-a383-4d72-a993-f7efdcd089e0-profile_banner-480.png')
  .addField('**Rules:**','**Welcome to the Striker Nation Community!**\n\n**Rules:**\n• Harassment will not be tolerated.\n• Be respectful.\n• Stay on topic with the channels & their descriptions.\n• Do not spam (that goes for emotes as well).\n• No NSFW Content.\n• Offensive names will be changed (Too sexual, racist, uncomfortable, etc.).\n• Uploading ban worthy images (NSFW, racist, art theft, etc.) will result in a ban.\n• Staff have final say in a matter.\n• Impersonation of staff will result in a ban.\n\n**If you agree to the rules above click the emoji to gain access to the server.**\n\n**DM any staff member online (MOD) if you need help (Not the Admin). We are here to help maintain the welcoming attitude of the discord.**')
  .setTimestamp()
  .setColor('PURPLE')
  .setFooter("StrikerBot doing it's job :D")

  firstMessage(client, channelId, embed, reactions)

  const handleReaction = (reaction, user, add) => {
    if (user.id === '736014724348641423') {
        return
  }

  const emoji = reaction._emoji.name

  const { guild } = reaction.message

  const roleName = emojis[emoji]
  if (!roleName) {
      return
  }

  const role = guild.roles.cache.find((role) => role.name === roleName)
  const member = guild.members.cache.find((member) => member.id === user.id)

  if (add) {
      member.roles.add(role)
  } else {
      member.roles.remove(role)
  }
}

  client.on('messageReactionAdd', (reaction,user) => {
    if (reaction.message.channel.id === channelId) {
        handleReaction(reaction, user, true)
      console.log('role added')
    }
  })

  client.on('messageReactionRemove', (reaction,user) => {
    if (reaction.message.channel.id === channelId) {
        handleReaction(reaction, user, false)
    console.log('role removed')
    }
  })
}